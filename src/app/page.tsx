import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import Industries from "@/components/Industries/Industries";
import Clients from "@/components/Clients/Clients";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />

        <FeaturedWork />
        <Industries />
        <Clients />
      </main>
      <Footer />
    </>
  );
}
