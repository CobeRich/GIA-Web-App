"use client";

/**
 * Root-level error boundary (replaces the entire document, including
 * <html> and <body>) for errors thrown in the root layout itself.
 * Acts as our "500" page.
 */
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-gia-teal">
          Error 500
        </p>
        <h1 className="mt-2 text-3xl font-bold text-gia-blue">
          A server error occurred
        </h1>
        <p className="mt-4 max-w-md text-gray-600">
          Something went wrong on our end. Please try again shortly.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 rounded-md bg-gia-blue px-4 py-2 text-white"
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
