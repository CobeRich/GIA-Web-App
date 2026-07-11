"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { partnershipSchema, type PartnershipFormValues } from "@/lib/schemas";
import { useFormSubmit } from "@/lib/useFormSubmit";
import FormField, { inputClasses } from "./FormField";
import Button from "@/components/ui/Button";

export default function PartnershipForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PartnershipFormValues>({ resolver: zodResolver(partnershipSchema) });
  const { status, errorMessage, submit } = useFormSubmit("partnership");

  const onSubmit = handleSubmit(async (values) => {
    const success = await submit(values);
    if (success) reset();
  });

  if (status === "success") {
    return (
      <p className="rounded-md bg-gia-teal/10 p-4 text-gia-teal">
        Thank you for your interest in partnering with GIA. Our partnerships team will be in
        touch.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <FormField label="Organisation" htmlFor="organisation" error={errors.organisation?.message}>
        <input id="organisation" className={inputClasses} {...register("organisation")} />
      </FormField>
      <FormField label="Contact Name" htmlFor="contactName" error={errors.contactName?.message}>
        <input id="contactName" className={inputClasses} {...register("contactName")} />
      </FormField>
      <FormField label="Email Address" htmlFor="email" error={errors.email?.message}>
        <input id="email" type="email" className={inputClasses} {...register("email")} />
      </FormField>
      <FormField
        label="Partnership Type"
        htmlFor="partnershipType"
        error={errors.partnershipType?.message}
        hint="e.g. government, academic, industry, NGO, funding"
      >
        <input id="partnershipType" className={inputClasses} {...register("partnershipType")} />
      </FormField>
      <FormField label="Message" htmlFor="message" error={errors.message?.message}>
        <textarea id="message" rows={5} className={inputClasses} {...register("message")} />
      </FormField>
      {status === "error" && <p className="mb-4 text-sm text-red-600">{errorMessage}</p>}
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
      </Button>
    </form>
  );
}
