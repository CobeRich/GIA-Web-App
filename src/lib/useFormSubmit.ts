"use client";

import { useState } from "react";
import type { FormType } from "@/lib/schemas";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

/**
 * Shared client-side submit handler for all forms. Posts JSON to the
 * generic /api/forms/[formType] route handler, which re-validates with
 * the matching zod schema server-side before "processing" the
 * submission (currently just logged — TODO: wire up real email/CRM
 * delivery, see docs/architecture.md).
 */
export function useFormSubmit(formType: FormType) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function submit(values: Record<string, unknown>): Promise<boolean> {
    setStatus("submitting");
    setErrorMessage(null);
    try {
      const res = await fetch(`/api/forms/${formType}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message ?? "Submission failed. Please try again.");
      }
      setStatus("success");
      return true;
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Submission failed.");
      return false;
    }
  }

  return { status, errorMessage, submit };
}
