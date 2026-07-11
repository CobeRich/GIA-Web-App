"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { platformAccessSchema, type PlatformAccessFormValues } from "@/lib/schemas";
import { useFormSubmit } from "@/lib/useFormSubmit";
import FormField, { inputClasses } from "./FormField";
import Button from "@/components/ui/Button";

export default function PlatformAccessForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PlatformAccessFormValues>({ resolver: zodResolver(platformAccessSchema) });
  const { status, errorMessage, submit } = useFormSubmit("platform-access");

  const onSubmit = handleSubmit(async (values) => {
    const success = await submit(values);
    if (success) reset();
  });

  if (status === "success") {
    return (
      <p className="rounded-md bg-gia-teal/10 p-4 text-gia-teal">
        Thank you. Your platform access request has been submitted for review.
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
      <FormField label="Organisation" htmlFor="organisation" error={errors.organisation?.message}>
        <input id="organisation" className={inputClasses} {...register("organisation")} />
      </FormField>
      <FormField label="Role" htmlFor="role" error={errors.role?.message}>
        <select id="role" className={inputClasses} {...register("role")} defaultValue="">
          <option value="" disabled>
            Select a role
          </option>
          <option value="student">Student</option>
          <option value="researcher">Researcher</option>
          <option value="staff">Staff</option>
          <option value="partner">Partner</option>
          <option value="other">Other</option>
        </select>
      </FormField>
      <FormField
        label="Justification"
        htmlFor="justification"
        error={errors.justification?.message}
        hint="Briefly describe why you need access to the platform"
      >
        <textarea id="justification" rows={5} className={inputClasses} {...register("justification")} />
      </FormField>
      {status === "error" && <p className="mb-4 text-sm text-red-600">{errorMessage}</p>}
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Request Access"}
      </Button>
    </form>
  );
}
