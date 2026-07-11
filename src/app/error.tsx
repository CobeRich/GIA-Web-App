"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // TODO: Send error to real monitoring/logging service.
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-gia-teal">
        Something went wrong
      </p>
      <h1 className="mt-2 text-3xl font-bold text-gia-blue sm:text-4xl">
        An unexpected error occurred
      </h1>
      <p className="mt-4 text-gray-600">
        Please try again. If the problem persists, contact our team.
      </p>
      <div className="mt-8 flex gap-4">
        <Button onClick={() => reset()}>Try Again</Button>
        <Button href="/contact" variant="outline">
          Contact Support
        </Button>
      </div>
    </div>
  );
}
