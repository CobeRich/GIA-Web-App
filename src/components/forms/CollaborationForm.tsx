"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { collaborationSchema, type CollaborationFormValues } from "@/lib/schemas";
import { useFormSubmit } from "@/lib/useFormSubmit";
import FormField, { inputClasses } from "./FormField";
import Button from "@/components/ui/Button";

export default function CollaborationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CollaborationFormValues>({ resolver: zodResolver(collaborationSchema) });
  const { status, errorMessage, submit } = useFormSubmit("collaboration");

  const onSubmit = handleSubmit(async (values) => {
    const success = await submit(values);
    if (success) reset();
  });

  if (status === "success") {
    return (
      <p className="rounded-md bg-gia-teal/10 p-4 text-gia-teal">
        Thank you. Our research collaboration team will review your request and respond soon.
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
        label="Area of Collaboration"
        htmlFor="collaborationArea"
        error={errors.collaborationArea?.message}
        hint="e.g. groundwater modelling, data sharing, joint field research"
      >
        <input id="collaborationArea" className={inputClasses} {...register("collaborationArea")} />
      </FormField>
      <FormField label="Message" htmlFor="message" error={errors.message?.message}>
        <textarea id="message" rows={5} className={inputClasses} {...register("message")} />
      </FormField>
      {status === "error" && <p className="mb-4 text-sm text-red-600">{errorMessage}</p>}
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  );
}
