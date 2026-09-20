import { createSupabaseServerClient } from "./server";

export async function getAuthenticatedUser() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    throw new Error(`Unable to verify the current user: ${error.message}`);
  }

  return user;
}
