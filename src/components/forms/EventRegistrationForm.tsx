"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  eventRegistrationSchema,
  type EventRegistrationFormValues,
} from "@/lib/schemas";
import { useFormSubmit } from "@/lib/useFormSubmit";
import FormField, { inputClasses } from "./FormField";
import Button from "@/components/ui/Button";

export default function EventRegistrationForm({ eventSlug }: { eventSlug: string }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EventRegistrationFormValues>({
    resolver: zodResolver(eventRegistrationSchema),
  });
  const { status, errorMessage, submit } = useFormSubmit("event-registration");

  const onSubmit = handleSubmit(async (values) => {
    const success = await submit({ ...values, eventSlug });
    if (success) reset();
  });

  if (status === "success") {
    return (
      <p className="rounded-md bg-gia-teal/10 p-4 text-gia-teal">
        You&apos;re registered! A confirmation email will follow shortly.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <FormField label="Full Name" htmlFor="fullName" error={errors.fullName?.message}>
        <input id="fullName" className={inputClasses} {...register("fullName")} />
      </FormField>
      <FormField label="Email Address" htmlFor="email" error={errors.email?.message}>
        <input id="email" type="email" className={inputClasses} {...register("email")} />
      </FormField>
      <FormField
        label="Organisation (optional)"
        htmlFor="organisation"
        error={errors.organisation?.message}
      >
        <input id="organisation" className={inputClasses} {...register("organisation")} />
      </FormField>
      <FormField
        label="Dietary Requirements (optional)"
        htmlFor="dietaryRequirements"
        error={errors.dietaryRequirements?.message}
      >
        <input
          id="dietaryRequirements"
          className={inputClasses}
          {...register("dietaryRequirements")}
        />
      </FormField>
      {status === "error" && <p className="mb-4 text-sm text-red-600">{errorMessage}</p>}
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Registering..." : "Register"}
      </Button>
    </form>
  );
}
