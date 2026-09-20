import { NextResponse } from "next/server";
import { getAuthenticatedUser } from "@/lib/supabase/user";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function POST(request: Request) {
  const user = await getAuthenticatedUser();
  if (!user) return NextResponse.json({ error: "Authentication required." }, { status: 401 });

  const body = await request.json().catch(() => null);
  const workspaceId = typeof body?.workspaceId === "string" ? body.workspaceId : "";
  const capability = typeof body?.capability === "string" ? body.capability.trim() : "";
  const input = body?.input && typeof body.input === "object" ? body.input : {};

  if (!uuidPattern.test(workspaceId) || !capability || capability.length > 160) {
    return NextResponse.json({ error: "A valid workspace and capability are required." }, { status: 400 });
  }

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("agent_runs")
    .insert({ workspace_id: workspaceId, requested_by: user.id, capability, input })
    .select("id, workspace_id, capability, status, input, created_at")
    .single();

  if (error) {
    console.error("agent run creation failed", error);
    return NextResponse.json({ error: "Unable to create the agent run." }, { status: 500 });
  }

  return NextResponse.json({ run: data }, { status: 201 });
}

export async function GET(request: Request) {
  const user = await getAuthenticatedUser();
  if (!user) return NextResponse.json({ error: "Authentication required." }, { status: 401 });

  const workspaceId = new URL(request.url).searchParams.get("workspaceId") ?? "";
  if (!uuidPattern.test(workspaceId)) {
    return NextResponse.json({ error: "A valid workspace is required." }, { status: 400 });
  }

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("agent_runs")
    .select("id, workspace_id, capability, status, input, output, error, created_at, completed_at")
    .eq("workspace_id", workspaceId)
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    console.error("agent run listing failed", error);
    return NextResponse.json({ error: "Unable to load agent runs." }, { status: 500 });
  }

  return NextResponse.json({ runs: data });
}
