import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Groundwater Institute of Africa.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        description="Have a question about our research, partnerships, or platform? Reach out to our team."
      />
      <section className="mx-auto grid max-w-5xl gap-8 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:px-8">
        <Card>
          <h2 className="mb-3 text-lg font-semibold text-gia-blue">Head Office</h2>
          {/* TODO: Replace with real contact details */}
          <p className="text-sm text-gray-600">
            Groundwater Institute of Africa
            <br />
            123 Research Avenue
            <br />
            Nairobi, Kenya
          </p>
          <p className="mt-3 text-sm text-gray-600">
            Email:{" "}
            <a href="mailto:info@gia.example.org" className="text-gia-blue underline">
              info@gia.example.org
            </a>
          </p>
          <p className="text-sm text-gray-600">Phone: +254 000 000 000</p>
        </Card>
        <Card>
          <h2 className="mb-3 text-lg font-semibold text-gia-blue">Department Contacts</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Research: research@gia.example.org</li>
            <li>Partnerships: partnerships@gia.example.org</li>
            <li>Admissions: admissions@gia.example.org</li>
            <li>Media &amp; Communications: media@gia.example.org</li>
          </ul>
        </Card>
      </section>
    </>
  );
}
