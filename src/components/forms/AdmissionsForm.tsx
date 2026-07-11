"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { admissionsSchema, type AdmissionsFormValues } from "@/lib/schemas";
import { useFormSubmit } from "@/lib/useFormSubmit";
import FormField, { inputClasses } from "./FormField";
import Button from "@/components/ui/Button";

export default function AdmissionsForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdmissionsFormValues>({ resolver: zodResolver(admissionsSchema) });
  const { status, errorMessage, submit } = useFormSubmit("admissions");

  const onSubmit = handleSubmit(async (values) => {
    const success = await submit(values);
    if (success) reset();
  });

  if (status === "success") {
    return (
      <p className="rounded-md bg-gia-teal/10 p-4 text-gia-teal">
        Thank you for your application. Our admissions team will be in touch shortly.
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
      <FormField label="Phone Number" htmlFor="phone" error={errors.phone?.message}>
        <input id="phone" className={inputClasses} {...register("phone")} />
      </FormField>
      <FormField
        label="Programme of Interest"
        htmlFor="programme"
        error={errors.programme?.message}
        hint="e.g. MSc in Hydrogeology, PhD in Water Resources"
      >
        <input id="programme" className={inputClasses} {...register("programme")} />
      </FormField>
      <FormField
        label="Personal Statement"
        htmlFor="statement"
        error={errors.statement?.message}
      >
        <textarea id="statement" rows={5} className={inputClasses} {...register("statement")} />
      </FormField>
      {status === "error" && (
        <p className="mb-4 text-sm text-red-600">{errorMessage}</p>
      )}
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
