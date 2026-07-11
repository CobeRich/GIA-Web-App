export const institution = {
  shortName: "GIA",
  fullName: "Groundwater Intelligence Academy",
  researchProgramme: "Integrated Framework for Potable Water Estimation and Management",
  degreeTrack:
    "MPhil Scientific Computing and Industrial Modeling - Groundwater Intelligence & Computational Environmental Systems Track",
};

export type HeroType = "A" | "B" | "C" | "D" | "E";

export const assetPaths = {
  logo: "/images/gia-logo.png",
  heroA: "/images/gia-hero-banner-a.png",
  heroB: "/images/gia-hero-banner-b.png",
  heroC: "/images/gia-hero-banner-c.png",
  heroD: "/images/gia-hero-banner-d.png",
  heroE: "/images/gia-hero-banner-e.png",
  docTemplate: "/docs/gia-doc-template.pdf",
  videoTemplate: "/videos/video-template",
};

export const utilityAnnouncement = {
  href: "/opportunities",
  text: "Applications open for the MPhil Groundwater Intelligence Track.",
};

export function heroImageByType(type: HeroType): string {
  if (type === "B") return assetPaths.heroB;
  if (type === "C") return assetPaths.heroC;
  if (type === "D") return assetPaths.heroD;
  if (type === "E") return assetPaths.heroE;
  return assetPaths.heroA;
}

export function heroTypeByPath(pathname: string): HeroType {
  if (pathname.startsWith("/platform")) return "E";

  if (pathname.startsWith("/study/modules/")) return "D";

  if (pathname.startsWith("/study")) {
    return "C";
  }

  if (pathname.startsWith("/research") || pathname.startsWith("/laboratories")) {
    return "B";
  }

  return "A";
}
