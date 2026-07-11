import { z } from "zod";

/**
 * Centralized zod validation schemas for all site forms. Shared between
 * client-side react-hook-form resolvers and the API route handlers under
 * src/app/api/forms/, so validation logic only lives in one place.
 */

export const admissionsSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  programme: z.string().min(2, "Please select a programme of interest"),
  statement: z.string().min(20, "Please provide at least 20 characters"),
});
export type AdmissionsFormValues = z.infer<typeof admissionsSchema>;

export const collaborationSchema = z.object({
  organisation: z.string().min(2, "Please enter your organisation name"),
  contactName: z.string().min(2, "Please enter a contact name"),
  email: z.string().email("Please enter a valid email address"),
  collaborationArea: z.string().min(2, "Please describe the area of collaboration"),
  message: z.string().min(20, "Please provide at least 20 characters"),
});
export type CollaborationFormValues = z.infer<typeof collaborationSchema>;

export const partnershipSchema = z.object({
  organisation: z.string().min(2, "Please enter your organisation name"),
  contactName: z.string().min(2, "Please enter a contact name"),
  email: z.string().email("Please enter a valid email address"),
  partnershipType: z.string().min(2, "Please select a partnership type"),
  message: z.string().min(20, "Please provide at least 20 characters"),
});
export type PartnershipFormValues = z.infer<typeof partnershipSchema>;

export const consultancySchema = z.object({
  organisation: z.string().min(2, "Please enter your organisation name"),
  contactName: z.string().min(2, "Please enter a contact name"),
  email: z.string().email("Please enter a valid email address"),
  serviceNeeded: z.string().min(2, "Please describe the service needed"),
  budgetRange: z.string().optional(),
  message: z.string().min(20, "Please provide at least 20 characters"),
});
export type ConsultancyFormValues = z.infer<typeof consultancySchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});
export type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export const dataAccessSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  affiliation: z.string().min(2, "Please enter your affiliation"),
  datasetRequested: z.string().min(2, "Please describe the dataset requested"),
  intendedUse: z.string().min(20, "Please provide at least 20 characters"),
});
export type DataAccessFormValues = z.infer<typeof dataAccessSchema>;

export const platformAccessSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  organisation: z.string().min(2, "Please enter your organisation"),
  role: z.enum(["student", "researcher", "staff", "partner", "other"], {
    message: "Please select a role",
  }),
  justification: z.string().min(20, "Please provide at least 20 characters"),
});
export type PlatformAccessFormValues = z.infer<typeof platformAccessSchema>;

export const eventRegistrationSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  organisation: z.string().optional(),
  dietaryRequirements: z.string().optional(),
});
export type EventRegistrationFormValues = z.infer<typeof eventRegistrationSchema>;

export const formSchemas = {
  admissions: admissionsSchema,
  collaboration: collaborationSchema,
  partnership: partnershipSchema,
  consultancy: consultancySchema,
  newsletter: newsletterSchema,
  "data-access": dataAccessSchema,
  "platform-access": platformAccessSchema,
  "event-registration": eventRegistrationSchema,
} as const;

export type FormType = keyof typeof formSchemas;
