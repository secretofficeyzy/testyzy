import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchemaApi } from "@/lib/validations/contact";

const DEFAULT_CONTACT_TO = "tuzovmax26@gmail.com";
const DEFAULT_CONTACT_FROM = "YZY Wheels <onboarding@resend.dev>";

const resendApiKey = process.env.RESEND_API_KEY;
const contactToEmail =
  process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_CONTACT_TO;
const contactFromEmail =
  process.env.CONTACT_FROM_EMAIL?.trim() || DEFAULT_CONTACT_FROM;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

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

    if (!resend) {
      console.error("[contact] Missing RESEND_API_KEY.");
      return NextResponse.json(
        { ok: false, message: "Serviciul de trimitere email nu este configurat." },
        { status: 500 },
      );
    }

    const { name, email, phone, message } = parsed.data;

    await resend.emails.send({
      from: contactFromEmail,
      to: [contactToEmail],
      subject: "Mesaj nou din formularul de contact",
      replyTo: email,
      text: [
        "Ai primit un mesaj nou de la client:",
        `Nume: ${name}`,
        `Email: ${email}`,
        `Număr telefon: ${phone}`,
        "",
        "Conținutul mesajului:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true, message: "Mesaj primit." });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Cerere invalidă." },
      { status: 400 },
    );
  }
}
