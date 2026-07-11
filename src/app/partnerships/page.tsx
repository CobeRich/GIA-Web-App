import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import PartnerLogos from "@/components/sections/PartnerLogos";
import { getAllPartners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Partnerships",
  description: "Explore GIA's partnership categories and learn how to become a partner.",
};

const SUBSECTIONS = [
  { href: "/partnerships/categories", title: "Partnership Categories", description: "Government, academic, industry, and NGO partnerships." },
  { href: "/partnerships/become-a-partner", title: "Become a Partner", description: "Learn how your organisation can partner with GIA." },
  { href: "/partnerships/enquiry", title: "Partnership Enquiry", description: "Send us a partnership enquiry." },
];

export default function PartnershipsPage() {
  const partners = getAllPartners();
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Partnering to secure potable water for Africa"
        description="GIA collaborates with governments, universities, industry, and civil society to expand the reach and impact of groundwater research."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SUBSECTIONS.map((item) => (
            <Link key={item.href} href={item.href}>
              <Card className="h-full">
                <h3 className="mb-2 text-lg font-semibold text-gia-blue">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      <PartnerLogos partners={partners} />
    </>
  );
}
