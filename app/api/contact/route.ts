import { NextResponse } from "next/server";
import { contactSchemaApi } from "@/lib/validations/contact";

/** Validează JSON-ul; conectează aici Resend / SMTP / CRM când vrei notificări pe email. */
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as unknown;
    const parsed = contactSchemaApi.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Date invalide.", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    if (process.env.NODE_ENV === "development") {
      console.info("[contact]", parsed.data);
    }

    return NextResponse.json({ ok: true, message: "Mesaj primit." });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Cerere invalidă." },
      { status: 400 },
    );
  }
}
