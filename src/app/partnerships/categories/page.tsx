import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Partnership Categories",
  description: "The categories of partnership GIA offers to governments, academia, industry, and NGOs.",
};

// TODO: Replace with real partnership category descriptions.
const CATEGORIES = [
  { title: "Government", description: "Policy collaboration, regulatory support, and joint infrastructure programmes." },
  { title: "Academic", description: "Joint research, student exchange, and co-supervised postgraduate projects." },
  { title: "Industry", description: "Technology transfer, consultancy, and commercialisation partnerships." },
  { title: "NGO & Civil Society", description: "Community-level implementation and advocacy partnerships." },
  { title: "Funding & Donors", description: "Grant funding and programme co-financing partnerships." },
];

export default function PartnershipCategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Partnership Categories"
        description="GIA works across five main partnership categories to maximise research and implementation impact."
      />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {CATEGORIES.map((category) => (
            <Card key={category.title}>
              <h3 className="mb-2 text-lg font-semibold text-gia-blue">{category.title}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
