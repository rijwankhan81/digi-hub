import Header from "@/components/Header/Header";
import Values from "@/components/Values/Values";
import Footer from "@/components/Footer/Footer";
import AboutHero from "@/components/AboutHero/AboutHero";
import Story from "@/components/Story/Story";
import Stats from "@/components/Stats/Stats";

export const metadata = {
  title: "About — Digi Hub",
  description:
    "Digi Hub is a one-stop marketing agency: strategy, content, code, film and sound, wired into one team.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <Story />
        <Stats />
        <Values />
      </main>
      <Footer />
    </>
  );
}
