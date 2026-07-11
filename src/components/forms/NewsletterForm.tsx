"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterFormValues } from "@/lib/schemas";
import { useFormSubmit } from "@/lib/useFormSubmit";
import FormField, { inputClasses } from "./FormField";
import Button from "@/components/ui/Button";

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormValues>({ resolver: zodResolver(newsletterSchema) });
  const { status, errorMessage, submit } = useFormSubmit("newsletter");

  const onSubmit = handleSubmit(async (values) => {
    const success = await submit(values);
    if (success) reset();
  });

  if (status === "success") {
    return (
      <p className="rounded-md bg-gia-teal/10 p-4 text-gia-teal">
        You&apos;re subscribed! Look out for our next newsletter.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3 sm:flex-row sm:items-start">
      <div className="flex-1">
        <FormField label="Email Address" htmlFor="newsletter-email" error={errors.email?.message}>
          <input
            id="newsletter-email"
            type="email"
            placeholder="you@example.org"
            className={inputClasses}
            {...register("email")}
          />
        </FormField>
      </div>
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Subscribing..." : "Subscribe"}
      </Button>
      {status === "error" && <p className="text-sm text-red-600">{errorMessage}</p>}
    </form>
  );
}
