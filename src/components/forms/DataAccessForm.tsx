"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dataAccessSchema, type DataAccessFormValues } from "@/lib/schemas";
import { useFormSubmit } from "@/lib/useFormSubmit";
import FormField, { inputClasses } from "./FormField";
import Button from "@/components/ui/Button";

export default function DataAccessForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DataAccessFormValues>({ resolver: zodResolver(dataAccessSchema) });
  const { status, errorMessage, submit } = useFormSubmit("data-access");

  const onSubmit = handleSubmit(async (values) => {
    const success = await submit(values);
    if (success) reset();
  });

  if (status === "success") {
    return (
      <p className="rounded-md bg-gia-teal/10 p-4 text-gia-teal">
        Thank you. Your dataset access request has been received and is under review.
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
      <FormField label="Affiliation" htmlFor="affiliation" error={errors.affiliation?.message}>
        <input id="affiliation" className={inputClasses} {...register("affiliation")} />
      </FormField>
      <FormField
        label="Dataset Requested"
        htmlFor="datasetRequested"
        error={errors.datasetRequested?.message}
      >
        <input id="datasetRequested" className={inputClasses} {...register("datasetRequested")} />
      </FormField>
      <FormField
        label="Intended Use"
        htmlFor="intendedUse"
        error={errors.intendedUse?.message}
      >
        <textarea id="intendedUse" rows={5} className={inputClasses} {...register("intendedUse")} />
      </FormField>
      {status === "error" && <p className="mb-4 text-sm text-red-600">{errorMessage}</p>}
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Request Access"}
      </Button>
    </form>
  );
}
