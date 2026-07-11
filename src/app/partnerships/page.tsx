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

const categories = ["Government", "Academic", "Industry", "NGO & Civil Society", "Funding & Donors"];

const collaborationModels = [
  "Research collaboration",
  "Policy and advisory collaboration",
  "Platform and data collaboration",
  "Laboratory and training collaboration",
  "Pilot implementation collaboration",
];

const benefits = [
  "Access to integrated groundwater intelligence expertise",
  "Joint project design and technical implementation",
  "Evidence-backed policy and planning support",
  "Co-development pathways for innovation and scale",
];

const engagementProcess = [
  "Initial enquiry and scope definition",
  "Technical alignment and partnership model selection",
  "Workplan and governance agreement",
  "Implementation, review, and impact reporting",
];

export default function PartnershipsPage() {
  const partners = getAllPartners();
  const featured = partners[0];

  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Partnering to secure potable water for Africa"
        description="GIA collaborates with governments, universities, industry, and civil society to expand the reach and impact of groundwater research."
      />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">1. Partnership Vision</h2>
            <p className="text-sm text-gray-700">
              Build long-term partnerships that convert groundwater intelligence into reliable potable-water outcomes.
            </p>
          </Card>
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">2. Partner Categories</h2>
            <ul className="list-disc space-y-1.5 pl-5 text-sm text-gray-700">
              {categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">3. Collaboration Models</h2>
            <ul className="list-disc space-y-1.5 pl-5 text-sm text-gray-700">
              {collaborationModels.map((model) => (
                <li key={model}>{model}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="mb-2 text-xl font-semibold text-gia-blue">4. Active Partners</h2>
            <div className="space-y-1.5 text-sm text-gray-700">
              {partners.map((partner) => (
                <p key={partner.slug}>
                  <Link href={`/partnerships/${partner.slug}`} className="font-semibold text-gia-teal hover:underline">
                    {partner.name}
                  </Link>
                  <span className="text-slate-500"> · {partner.category}</span>
                </p>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <h2 className="mb-2 text-xl font-semibold text-gia-blue">5. Featured Collaboration</h2>
              {featured ? (
                <>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">{featured.name}</span>: {featured.summary}
                  </p>
                  <Link href={`/partnerships/${featured.slug}`} className="mt-4 inline-block text-sm font-semibold text-gia-teal hover:underline">
                    View collaboration profile
                  </Link>
                </>
              ) : (
                <p className="text-sm text-gray-700">Featured collaboration details will be published with partner updates.</p>
              )}
            </Card>
            <Card>
              <h2 className="mb-2 text-xl font-semibold text-gia-blue">6. Benefits</h2>
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-gray-700">
                {benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Card>
              <h2 className="mb-2 text-xl font-semibold text-gia-blue">7. Engagement Process</h2>
              <ol className="list-decimal space-y-1.5 pl-5 text-sm text-gray-700">
                {engagementProcess.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </Card>
            <Card>
              <h2 className="mb-2 text-xl font-semibold text-gia-blue">8. Become-a-Partner CTA</h2>
              <p className="text-sm text-gray-700">
                Start a structured partnership journey with GIA for research, platform, or implementation collaboration.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/partnerships/become-a-partner" className="rounded-md bg-gia-teal px-5 py-3 text-sm font-semibold text-white">
                  Become a Partner
                </Link>
                <Link href="/partnerships/enquiry" className="rounded-md border border-gia-blue px-5 py-3 text-sm font-semibold text-gia-blue">
                  Partnership Enquiry
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <PartnerLogos partners={partners} />
    </>
  );
}
