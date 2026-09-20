import { NextResponse } from "next/server";
import { getAuthenticatedUser } from "@/lib/supabase/user";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export async function POST(request: Request) {
  const user = await getAuthenticatedUser();
  if (!user) return NextResponse.json({ error: "Authentication required." }, { status: 401 });

  const body = await request.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const slug = typeof body?.slug === "string" ? body.slug.trim().toLowerCase() : "";
  if (!name || name.length > 120 || !slugPattern.test(slug)) {
    return NextResponse.json({ error: "Name and a valid URL-safe slug are required." }, { status: 400 });
  }

  const supabase = await createSupabaseServerClient();
  const { data: workspace, error } = await supabase
    .from("workspaces")
    .insert({ name, slug, created_by: user.id })
    .select("id, name, slug, created_by, created_at")
    .single();
  if (error) {
    console.error("workspace creation failed", error);
    return NextResponse.json({ error: "Unable to create the workspace." }, { status: 500 });
  }

  const { error: membershipError } = await supabase.from("workspace_members").insert({
    workspace_id: workspace.id,
    user_id: user.id,
    role: "owner",
  });
  if (membershipError) {
    console.error("workspace membership creation failed", membershipError);
    await supabase.from("workspaces").delete().eq("id", workspace.id);
    return NextResponse.json({ error: "Unable to initialize workspace access." }, { status: 500 });
  }

  return NextResponse.json({ workspace }, { status: 201 });
}

export async function GET() {
  const user = await getAuthenticatedUser();
  if (!user) return NextResponse.json({ error: "Authentication required." }, { status: 401 });

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("workspace_members")
    .select("role, workspace:workspaces(id, name, slug, created_at)")
    .eq("user_id", user.id);
  if (error) {
    console.error("workspace listing failed", error);
    return NextResponse.json({ error: "Unable to load workspaces." }, { status: 500 });
  }
  return NextResponse.json({ workspaces: data });
}
