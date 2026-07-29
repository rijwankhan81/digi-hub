import Header from "@/components/Header/Header";
import ContactHero from "@/components/contact/ContactHero/ContactHero";
import ContactSection from "@/components/contact/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Contact — Digi Hub",
  description:
    "Get in touch with Digi Hub — digital marketing, branding, content, consulting, web & app development, AI solutions and training, under one team.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
