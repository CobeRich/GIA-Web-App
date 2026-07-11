import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import NewsletterForm from "@/components/forms/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter Signup",
  description: "Subscribe to receive the GIA newsletter.",
};

export default function Newsletter SignupPage() {
  return (
    <>
      <PageHero eyebrow="Forms" title="Newsletter Signup" description="Subscribe to receive the GIA newsletter." />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <NewsletterForm />
      </section>
    </>
  );
}
