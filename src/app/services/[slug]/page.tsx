import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { SERVICES } from "@/data/services";

// Components (we'll build these next)
import ServiceHero from "@/components/service/ServiceHero/ServiceHero";
import ServiceStats from "@/components/service/ServiceStats/ServiceStats";
import ServiceFeatures from "@/components/service/ServiceFeatures/ServiceFeatures";
import ServiceProcess from "@/components/service/ServiceProcess/ServiceProcess";
import ServiceCTA from "@/components/service/ServiceCTA/ServiceCTA";
import ServiceFaq from "@/components/service/ServiceFAQ/ServiceFaq";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

/**
 * Generate all service pages at build time
 */
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

/**
 * Dynamic SEO
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = getService(slug);

  if (!service) {
    return {
      title: "Service Not Found | Digi Hub",
    };
  }

  return {
    title: `${service.title} | Digi Hub`,
    description: service.description,

    keywords: [
      service.title,
      ...service.features,
      "Digi Hub",
      "Business Solutions",
    ],

    openGraph: {
      title: service.title,
      description: service.description,
      images: [service.heroImage],
    },

    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
      images: [service.heroImage],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <ServiceHero service={service} />
        <ServiceFeatures service={service} />
        <ServiceProcess service={service} />
        <ServiceStats service={service} />
        <ServiceFaq service={service} />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
}
