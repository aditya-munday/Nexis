import { redirect } from "next/navigation";

export const metadata = {
  title: "Nexis Agent Platform",
  description: "Production web shell for the Nexis autonomous agent platform.",
};

export default function AppPage() {
  // In production this would check session; for now redirect to auth
  redirect("/auth?mode=signin&next=/app");
}
