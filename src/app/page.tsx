import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Showreel from "@/components/Showreel/Showreel";
import Clients from "@/components/Clients/Clients";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Showreel />
        <Clients />
      </main>
      <Footer />
    </>
  );
}
