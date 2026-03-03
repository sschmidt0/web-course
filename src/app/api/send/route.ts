import { Resend } from "resend";
import { type NextRequest } from "next/server";
import SendConfirmation from "@/emails/send-confirmation";
import { Language } from "@/common/model/language";
import { MESSAGES } from "@/db/messages";
import { EMAIL_MESSAGE } from "@/db/email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const username = searchParams.get("username") as string;
  const email = decodeURIComponent(searchParams.get("email") as string);
  const message = searchParams.get("message") as string;
  const language = searchParams.get("language") as Language;

  const errorMessage = MESSAGES[language];
  const subject = EMAIL_MESSAGE[language]?.subject || "sarahschmidt.cat";

  // Validación mejorada
  if (!message || !email || !username || !language) {
    console.error("Missing required fields:", {
      hasMessage: !!message,
      hasEmail: !!email,
      hasUsername: !!username,
      hasLanguage: !!language,
    });
    return Response.json({ error: errorMessage?.error }, { status: 400 });
  }

  // Validar que la API key esté configurada
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY environment variable is not set");
    return Response.json(
      { error: "Email service not configured" },
      { status: 500 },
    );
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Sarah Schmidt <contacte@sarahschmidt.cat>",
      to: email,
      cc: "sakschmidt@gmail.com",
      subject: subject,
      react: (await SendConfirmation({
        username,
        message,
        email,
        language,
      })) as React.ReactElement,
    });

    if (error) {
      console.error("Resend API error:", error);
      return Response.json(
        { message: errorMessage?.error, error },
        { status: 400 },
      );
    }

    console.log("Email sent successfully to:", email);
    return Response.json(
      { message: errorMessage?.success, data },
      { status: 200 },
    );
  } catch (error) {
    console.error("Unexpected error sending email:", error);
    return Response.json(
      { message: errorMessage?.error, error: "Internal server error" },
      { status: 500 },
    );
  }
}
