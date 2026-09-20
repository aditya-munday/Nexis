# Directioner-OS

Directioner-OS is an AI-native operating system built around a resident, deterministic AI Engineer and the Aria multimodal spatial assistant.

## Core promise

Directioner-OS replaces the toy chatbot and the unguarded agent with a capability-scoped systems engineer that:

- monitors system health locally;
- tests updates before they reach the active system;
- calculates a quantitative blast radius for every mutation;
- enforces typed, auditable capability RPCs instead of arbitrary shell execution;
- provides compensating rollback steps and an append-only Work Log;
- recovers automatically through cryptographically pinned A/B boot slots; and
- can be halted by the physical `ai-killswitch` in under 0.4 milliseconds.

## Product tiers

**Directioner-OS Core** is the free, community operating system: immutable base image, Aether desktop, universal hardware support, local AI Engineer, SQLite World Model, audit Work Log, offline explanations, Proton/Wine compatibility, and the hardware killswitch.

Optional hosted model integrations and fleet features are not assumed by the core OS. If enabled, each integration must be explicitly configured by the operator, constrained by capability policy, and documented with its data handling and availability.

## Safety model

Every mutation passes through five stages: Planner, Policy Engine, Reviewer, Implementer, and Auditor. Actions are classified into four autonomy tiers:

- Tier 0 Auto: score 0–15
- Tier 1 Notify: score 16–35
- Tier 2 Confirm: score 36–60
- Tier 3 Expert Review: score 61–100

The complete product positioning, architecture, capability matrix, and FAQ are documented in [DirectionerOS.md](./DirectionerOS.md).

## Development

```bash
npm install
npm run dev
```

Build the production application with:

```bash
npm run build
```

## Backend integration

The repository includes Supabase SSR/auth scaffolding, an initial Supabase migration, and a server-only Resend route at `POST /api/contact`. The provider credentials are intentionally not included. The application fails explicitly when a required server integration is missing.

Configure these deployment environment variables (never commit an env file):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (or legacy `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
- `SUPABASE_SERVICE_ROLE_KEY` (server-only; do not expose to browser code)
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `CONTACT_INBOX_EMAIL`

Apply `supabase/migrations/20260919171500_initial_schema.sql` with the Supabase CLI or SQL editor. The auth callback is available at `/auth/callback`.

Available protected API routes:

- `POST /api/workspaces` creates a workspace for the authenticated user.
- `GET /api/workspaces` lists workspaces where the authenticated user is a member.
- `POST /api/agent/runs` queues a typed capability run in a workspace.
- `GET /api/agent/runs?workspaceId=<uuid>` lists the latest runs visible through Supabase RLS.
- `POST /api/contact` validates and sends a contact request through Resend.

Enable only the OAuth providers you intend to support in Supabase Auth. Set their callback URL to:

```text
https://YOUR_DOMAIN/auth/callback
```

Do not use the service-role key in client components, route parameters, logs, or public environment variables.
