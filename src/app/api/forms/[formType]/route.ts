import { NextResponse, type NextRequest } from "next/server";
import { formSchemas, type FormType } from "@/lib/schemas";

/**
 * Generic form submission endpoint used by every client form component.
 * Route: POST /api/forms/[formType]
 *
 * Validates the payload against the zod schema matching `formType`, then
 * "processes" it. TODO: Replace the processing step with real delivery
 * (e.g. email via a transactional provider, CRM webhook, or database
 * write) — see docs/architecture.md for suggested integration points.
 */
export async function POST(
  request: NextRequest,
  { params }: { params: { formType: string } }
) {
  const formType = params.formType as FormType;
  const schema = formSchemas[formType];

  if (!schema) {
    return NextResponse.json(
      { message: "Unknown form type." },
      { status: 400 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 }
    );
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      {
        message: "Validation failed.",
        issues: result.error.issues,
      },
      { status: 422 }
    );
  }

  // TODO: Persist/forward the submission (email, CRM, database, etc).
  console.log(`[forms/${formType}] submission received`, result.data);

  return NextResponse.json({ message: "Submission received." }, { status: 200 });
}
