import Header from "@/components/Header/Header";
import PortfolioHero from "@/components/portfolio/PortfolioHero/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid/PortfolioGrid";
import PortfolioCta from "@/components/portfolio/PortfolioCta/PortfolioCta";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Portfolio — Digi Hub",
  description:
    "Campaigns, brands, products and systems shipped by Digi Hub across digital marketing, branding, content, consulting, web & app, AI and training.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <PortfolioHero />
        <PortfolioGrid />
        <PortfolioCta />
      </main>
      <Footer />
    </>
  );
}
