import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import ProcessFlow from "@/components/ui/ProcessFlow";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Integrated Framework",
  description: "Integrated Framework for Potable Water Estimation and Management.",
  path: "/research/integrated-framework",
  image: "/images/gia-hero-banner-b.png",
});

export default function IntegratedFrameworkPage() {
  const systemNodes = [
    { title: "Climate", href: "/research/work-packages/wp1-climate-surface-forcing" },
    { title: "Surface", href: "/research/work-packages/wp1-climate-surface-forcing" },
    { title: "Vadose Zone", href: "/research/work-packages/wp2-vadose-zone-flow" },
    { title: "Contaminants", href: "/research/work-packages/wp3-contaminant-transport" },
    { title: "Aquifer", href: "/research/work-packages/wp4-aquifer-systems" },
    { title: "Human Systems", href: "/research/work-packages/wp5-human-water-systems" },
    { title: "Potable-Water Decisions", href: "/research/work-packages/wp6-potable-water-assessment" },
  ];

  const researchStages = [
    "Foundations",
    "Core Physics",
    "Real Systems",
    "Decision Framework",
  ];

  const crossCuttingThemes = [
    "Uncertainty quantification and propagation",
    "Model-data fusion and calibration",
    "Scale-aware validation from laboratory to field",
    "Policy translation and implementation support",
  ];

  const outputs = [
    "Validated WP1-WP6 scientific framework",
    "Integrated platform workflows for scenario analysis",
    "Decision-ready potable-water assessment products",
    "Scientific software and reproducible computational assets",
  ];

  const impacts = [
    "Improved planning for potable-water security",
    "Stronger institutional capacity for groundwater governance",
    "Reduced uncertainty in quality and availability decisions",
    "Faster research-to-policy translation",
  ];

  const relatedWps = [
    { code: "WP1", href: "/research/work-packages/wp1-climate-surface-forcing" },
    { code: "WP2", href: "/research/work-packages/wp2-vadose-zone-flow" },
    { code: "WP3", href: "/research/work-packages/wp3-contaminant-transport" },
    { code: "WP4", href: "/research/work-packages/wp4-aquifer-systems" },
    { code: "WP5", href: "/research/work-packages/wp5-human-water-systems" },
    { code: "WP6", href: "/research/work-packages/wp6-potable-water-assessment" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Research"
        heroType="B"
        imageSrc="/images/framework-diagram-b.png"
        title="Integrated Framework"
        description="Full framework diagram narrative from climate forcing to potable-water decisions."
      />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gia-blue">1. Executive Overview</h2>
        <p className="mt-3 max-w-[82ch] text-gray-700">
          The Integrated Framework for Potable Water Estimation and Management connects scientific
          observation, mathematical modelling, computational intelligence, and decision support in one
          coherent research system.
        </p>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <h2 className="mb-2 text-xl font-semibold text-gia-blue">2. Groundwater and Potable-Water Challenge</h2>
              <p className="text-gray-700">
                Groundwater systems are exposed to hydroclimatic variability, contaminant pressures,
                and anthropogenic stress, making reliable potable-water estimation difficult.
              </p>
            </Card>
            <Card>
              <h2 className="mb-2 text-xl font-semibold text-gia-blue">3. Research Gap</h2>
              <p className="text-gray-700">
                Existing approaches often isolate physical, chemical, and socio-technical processes rather
                than resolving their coupled dynamics across scales.
              </p>
            </Card>
            <Card>
              <h2 className="mb-2 text-xl font-semibold text-gia-blue">4. Overall Objective</h2>
              <p className="text-gray-700">
                Build a validated, multi-scale intelligence framework that estimates potable-water quantity,
                quality, and risk under uncertainty.
              </p>
            </Card>
            <Card>
              <h2 className="mb-2 text-xl font-semibold text-gia-blue">5. Research Vision</h2>
              <p className="text-gray-700">
                A scientifically robust, computationally scalable, and policy-relevant framework that supports
                water-secure decision making.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gia-blue">6. Complete Interactive System Diagram</h2>
        <p className="mt-3 text-gray-700">
          Select each system component to inspect its linked research work package.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {systemNodes.map((node) => (
            <Link key={node.title} href={node.href}>
              <Card className="h-full transition hover:border-gia-teal">
                <p className="text-sm font-semibold text-gia-blue">{node.title}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gia-blue">7. Scientific Process Chain</h2>
          <p className="mt-3 text-gray-700">
            Climate → Surface → Vadose Zone → Contaminants → Aquifer → Human Systems → Potable-Water Decisions
          </p>
          <div className="mt-6">
            <ProcessFlow
              steps={[
                "Climate",
                "Surface",
                "Vadose Zone",
                "Contaminants",
                "Aquifer",
                "Human Systems",
                "Potable-Water Decisions",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gia-blue">8. Mathematical Foundations</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            "Continuum mechanics",
            "Non-Darcian flow",
            "Volume averaging",
            "Upscaling",
            "Multi-continuum theory",
          ].map((item) => (
            <Card key={item} className="h-full">
              <p className="text-sm font-semibold text-gia-blue">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <h2 className="mb-2 text-xl font-semibold text-gia-blue">9. Computational Architecture</h2>
              <p className="text-gray-700">
                Coupled solver stacks, data-processing pipelines, and scenario engines for WP1-WP6 integration.
              </p>
            </Card>
            <Card>
              <h2 className="mb-2 text-xl font-semibold text-gia-blue">10. Observation and Monitoring Architecture</h2>
              <p className="text-gray-700">
                Field measurements, laboratory observations, and monitoring streams provide calibration and validation evidence.
              </p>
            </Card>
            <Card>
              <h2 className="mb-2 text-xl font-semibold text-gia-blue">11. AI and Digital Twin Layer</h2>
              <p className="text-gray-700">
                AI-assisted inference and digital-twin simulation support forecasting, diagnostics, and decision testing.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gia-blue">12. Research Stages</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {researchStages.map((stage) => (
            <Card key={stage} className="h-full">
              <p className="text-sm font-semibold text-gia-blue">{stage}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gia-blue">13. Cross-Cutting Themes</h2>
          <ul className="mt-5 list-disc space-y-2 pl-6 text-gray-700">
            {crossCuttingThemes.map((theme) => (
              <li key={theme}>{theme}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gia-blue">14. Expected Outputs</h2>
        <ul className="mt-5 list-disc space-y-2 pl-6 text-gray-700">
          {outputs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gia-blue">15. Societal Impact</h2>
          <ul className="mt-5 list-disc space-y-2 pl-6 text-gray-700">
            {impacts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gia-blue">16. Related Work Packages</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {relatedWps.map((wp) => (
            <Link
              key={wp.code}
              href={wp.href}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-gia-blue hover:border-gia-teal hover:text-gia-teal"
            >
              {wp.code}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gia-blue">17. Publications and Downloads</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Link href="/research/publications">
              <Card className="h-full">
                <p className="text-base font-semibold text-gia-blue">Publications</p>
                <p className="mt-2 text-sm text-gray-600">Peer-reviewed papers, technical reports, and framework outputs.</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/downloads">
              <Card className="h-full">
                <p className="text-base font-semibold text-gia-blue">Downloads</p>
                <p className="mt-2 text-sm text-gray-600">Framework briefs, supporting documents, and reusable technical assets.</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-2xl font-bold text-gia-blue">18. Collaboration Opportunities</h2>
          <p className="mt-3 max-w-[76ch] text-gray-700">
            Collaborate on model development, field campaigns, data integration, software implementation,
            and policy translation activities across the integrated framework.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/research/collaboration" className="rounded-md bg-gia-teal px-5 py-3 text-sm font-semibold text-white">
              Explore Collaboration Pathways
            </Link>
            <Link href="/forms/collaboration" className="rounded-md border border-gia-blue px-5 py-3 text-sm font-semibold text-gia-blue">
              Submit Collaboration Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
