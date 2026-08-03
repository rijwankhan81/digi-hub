import Header from "@/components/Header/Header";
import BlogHero from "@/components/Blog/BlogHero/BlogHero";
import BlogGrid from "@/components/Blog/BlogGrid/BlogGrid";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Blog — Digi Hub",
  description:
    "Practical notes on digital marketing, branding, AI, business consulting and web development from the Digi Hub team.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
    </>
  );
}
