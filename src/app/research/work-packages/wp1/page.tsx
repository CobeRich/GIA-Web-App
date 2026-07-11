import PageHero from "@/components/ui/PageHero";
import { workPackages } from "@/lib/workPackages";

export default function Wp1Page() {
  const wp = workPackages.find((item) => item.slug === "wp1");
  if (!wp) return null;

  return (
    <>
      <PageHero heroType="B" eyebrow={wp.code} title={wp.title} description={wp.objective} />
      <section className="mx-auto max-w-[980px] px-4 py-16 sm:px-6 lg:px-8 text-gray-700">
        <p><strong>Scientific Questions:</strong> {wp.questions.join(" ")}</p>
      </section>
    </>
  );
}
