import Link from "next/link";
import type { Partner } from "@/types/content";

export default function PartnerLogos({ partners }: { partners: Partner[] }) {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-wide text-gray-500">
          Trusted by research and implementation partners
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {partners.map((partner) => (
            <Link
              key={partner.slug}
              href={`/partnerships/${partner.slug}`}
              className="flex h-16 w-40 items-center justify-center rounded border border-gray-200 bg-gray-50 text-center text-sm font-medium text-gray-500"
            >
              {/* TODO: Replace with real partner logo image */}
              {partner.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
