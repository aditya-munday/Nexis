import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogGrid from "../components/BlogGrid";

export const metadata = {
  title: "Blog — Nexis",
  description: "News, insights, and field notes from the team building governed on-chain autonomy at Nexis Research.",
};

export default function BlogPage() {
  return (
    <div className="pi-root min-h-screen bg-[var(--color-surface,#050505)] text-foreground flex flex-col">
      <Header />
      <div className="flex-1">
        <BlogGrid />
      </div>
      <Footer />
    </div>
  );
}
