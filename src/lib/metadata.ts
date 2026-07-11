import type { Metadata } from "next";
import { siteUrl } from "@/lib/utils";
import { institution } from "@/lib/siteConfig";

export interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function createMetadata({
  title,
  description,
  path,
  image = "/images/gia-hero-banner-a.png",
}: PageMetadataInput): Metadata {
  const canonical = siteUrl(path);
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${institution.fullName}`,
      description,
      url: canonical,
      siteName: institution.fullName,
      images: [{ url: image, width: 1200, height: 630 }],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${institution.fullName}`,
      description,
      images: [image],
    },
  };
}
