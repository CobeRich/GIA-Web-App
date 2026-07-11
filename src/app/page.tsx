import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedResearch from "@/components/sections/FeaturedResearch";
import StatsSection from "@/components/sections/StatsSection";
import NewsGrid from "@/components/sections/NewsGrid";
import PartnerLogos from "@/components/sections/PartnerLogos";
import {
  AcademicSpotlight,
  EcosystemPathways,
  FieldToDecisionWorkflow,
  FinalCallToAction,
  InnovationImpactTiles,
  PlatformDemonstration,
  StrategicPathwayStrip,
  WorkPackageFlow,
} from "@/components/sections/HomePathwaySections";
import { getAllNews, getAllResearchEntries, getAllPartners, getUpcomingEvents } from "@/lib/content";
import { siteUrl } from "@/lib/utils";
import { assetPaths, institution } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The Groundwater Intelligence Institute of Africa advances research, education, and platform innovation for safe and sustainable water systems.",
};

export default function HomePage() {
  const research = getAllResearchEntries().slice(0, 3);
  const news = getAllNews().slice(0, 3);
  const events = getUpcomingEvents().slice(0, 3);
  const partners = getAllPartners();

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: institution.fullName,
    alternateName: "GIA",
    url: siteUrl("/"),
    logo: siteUrl(assetPaths.logo),
    description:
      "The Groundwater Intelligence Institute of Africa advances groundwater research, education, and decision-support platform innovation.",
    sameAs: [],
  };

  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HeroSection type="A" />
      <StrategicPathwayStrip />
      <StatsSection />
      <EcosystemPathways />
      <WorkPackageFlow />
      <FeaturedResearch entries={research} />
      <AcademicSpotlight />
      <PlatformDemonstration />
      <FieldToDecisionWorkflow />
      <InnovationImpactTiles />
      <NewsGrid items={news} events={events} />
      <PartnerLogos partners={partners} />
      <FinalCallToAction />
    </>
  );
}
