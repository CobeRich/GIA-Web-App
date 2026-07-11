import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedResearch from "@/components/sections/FeaturedResearch";
import StatsSection from "@/components/sections/StatsSection";
import NewsGrid from "@/components/sections/NewsGrid";
import PartnerLogos from "@/components/sections/PartnerLogos";
import { getAllNews, getAllResearchEntries, getAllPartners } from "@/lib/content";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The Groundwater Institute of Africa (GIA) advances groundwater research, innovation, and partnerships to secure potable water access across Africa.",
};

export default function HomePage() {
  const research = getAllResearchEntries().slice(0, 3);
  const news = getAllNews().slice(0, 3);
  const partners = getAllPartners();

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Groundwater Institute of Africa",
    alternateName: "GIA",
    url: siteUrl("/"),
    // TODO: Replace with real logo URL once available.
    logo: siteUrl("/logo-placeholder.svg"),
    description:
      "The Groundwater Institute of Africa (GIA) advances groundwater research, innovation, and partnerships to secure potable water access across Africa.",
    sameAs: [],
  };

  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HeroSection />
      <StatsSection />
      <FeaturedResearch entries={research} />
      <NewsGrid items={news} />
      <PartnerLogos partners={partners} />
    </>
  );
}
