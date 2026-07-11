import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";
import RelatedContent from "@/components/content/RelatedContent";

export interface WorkPackageSection {
  title: string;
  body?: string;
  bullets?: string[];
}

export default function WorkPackageDetailPage({
  code,
  title,
  description,
  sections,
  forwardLink,
  relatedContent,
}: {
  code: string;
  title: string;
  description: string;
  sections: WorkPackageSection[];
  forwardLink?: { href: string; label: string };
  relatedContent?: {
    workPackages?: string[];
    laboratories?: string[];
    modules?: string[];
    projects?: string[];
    datasets?: string[];
    software?: string[];
    publications?: string[];
  };
}) {
  return (
    <>
      <PageHero heroType="B" eyebrow={code} title={`${code} ${title}`} description={description} />

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <Card key={section.title} className="h-full">
              <h2 className="text-lg font-semibold text-gia-blue">{section.title}</h2>
              {section.body ? <p className="mt-3 text-sm leading-relaxed text-gray-700">{section.body}</p> : null}
              {section.bullets && section.bullets.length > 0 ? (
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </Card>
          ))}
        </div>

        {forwardLink ? (
          <div className="mt-8">
            <Link
              href={forwardLink.href}
              className="inline-block rounded-md bg-gia-teal px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              {forwardLink.label}
            </Link>
          </div>
        ) : null}

        <RelatedContent
          workPackages={relatedContent?.workPackages}
          laboratories={relatedContent?.laboratories}
          modules={relatedContent?.modules}
          projects={relatedContent?.projects}
          datasets={relatedContent?.datasets}
          software={relatedContent?.software}
          publications={relatedContent?.publications}
        />
      </section>
    </>
  );
}
