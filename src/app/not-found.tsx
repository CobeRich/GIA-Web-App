import Link from "next/link";
import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-gia-teal">
        Error 404
      </p>
      <h1 className="mt-2 text-3xl font-bold text-gia-blue sm:text-4xl">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-4 text-gray-600">
        The page you are looking for may have been moved or no longer exists.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">Return Home</Button>
        <Button href="/contact" variant="outline">
          Contact Us
        </Button>
      </div>
      <p className="mt-4 text-sm text-gray-400">
        Or{" "}
        <Link href="/sitemap.xml" className="underline">
          view the sitemap
        </Link>
        .
      </p>
    </div>
  );
}
