create extension if not exists pgcrypto;

create type public.workspace_role as enum ('owner', 'admin', 'member');
create type public.agent_run_status as enum ('queued', 'running', 'succeeded', 'failed', 'cancelled');
create type public.subscription_status as enum ('trialing', 'active', 'past_due', 'canceled', 'incomplete');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 120),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.workspace_members (
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.workspace_role not null default 'member',
  created_at timestamptz not null default now(),
  primary key (workspace_id, user_id)
);

create table public.capability_policies (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  capability text not null check (char_length(capability) between 1 and 160),
  policy jsonb not null default '{}'::jsonb,
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (workspace_id, capability)
);

create table public.agent_runs (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  requested_by uuid not null references auth.users(id),
  capability text not null,
  status public.agent_run_status not null default 'queued',
  input jsonb not null default '{}'::jsonb,
  output jsonb,
  error text,
  started_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.work_log_entries (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  actor_id uuid references auth.users(id),
  agent_run_id uuid references public.agent_runs(id) on delete set null,
  action text not null check (char_length(action) between 1 and 160),
  summary text not null check (char_length(summary) between 1 and 2000),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null unique references public.workspaces(id) on delete cascade,
  provider text not null default 'placeholder',
  provider_customer_id text,
  provider_subscription_id text,
  status public.subscription_status not null default 'incomplete',
  plan_key text not null default 'placeholder',
  current_period_end timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index agent_runs_workspace_created_idx on public.agent_runs(workspace_id, created_at desc);
create index work_log_workspace_created_idx on public.work_log_entries(workspace_id, created_at desc);

create or replace function public.is_workspace_member(target_workspace_id uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.workspace_members
    where workspace_id = target_workspace_id and user_id = auth.uid()
  );
$$;

alter table public.profiles enable row level security;
alter table public.workspaces enable row level security;
alter table public.workspace_members enable row level security;
alter table public.capability_policies enable row level security;
alter table public.agent_runs enable row level security;
alter table public.work_log_entries enable row level security;
alter table public.subscriptions enable row level security;

create policy "Users can read their profile" on public.profiles for select using (id = auth.uid());
create policy "Users can update their profile" on public.profiles for update using (id = auth.uid()) with check (id = auth.uid());
create policy "Members can read workspaces" on public.workspaces for select using (public.is_workspace_member(id));
create policy "Authenticated users can create workspaces" on public.workspaces for insert to authenticated with check (created_by = auth.uid());
create policy "Workspace owners can update workspaces" on public.workspaces for update using (created_by = auth.uid()) with check (created_by = auth.uid());
create policy "Members can read membership" on public.workspace_members for select using (user_id = auth.uid() or public.is_workspace_member(workspace_id));
create policy "Workspace owners can manage membership" on public.workspace_members for all using (exists (select 1 from public.workspaces w where w.id = workspace_id and w.created_by = auth.uid())) with check (exists (select 1 from public.workspaces w where w.id = workspace_id and w.created_by = auth.uid()));
create policy "Members can read capability policies" on public.capability_policies for select using (public.is_workspace_member(workspace_id));
create policy "Workspace admins can manage capability policies" on public.capability_policies for insert to authenticated with check (public.is_workspace_member(workspace_id) and created_by = auth.uid());
create policy "Workspace admins can update capability policies" on public.capability_policies for update using (public.is_workspace_member(workspace_id) and created_by = auth.uid()) with check (public.is_workspace_member(workspace_id) and created_by = auth.uid());
create policy "Members can read agent runs" on public.agent_runs for select using (public.is_workspace_member(workspace_id));
create policy "Members can create agent runs" on public.agent_runs for insert to authenticated with check (public.is_workspace_member(workspace_id) and requested_by = auth.uid());
create policy "Members can read work log" on public.work_log_entries for select using (public.is_workspace_member(workspace_id));
create policy "Members can read subscriptions" on public.subscriptions for select using (public.is_workspace_member(workspace_id));

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'full_name', new.email));
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
