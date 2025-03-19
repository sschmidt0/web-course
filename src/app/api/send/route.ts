import { Resend } from "resend";
import { type NextRequest } from "next/server";
import SendConfirmation from "@/emails/send-confirmation";
import { Language } from "@/common/model/language";
import { MESSAGES } from "@/db/messages";
import { EMAIL_MESSAGE } from "@/db/email";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const username = searchParams.get("username") as string;
  const email = searchParams.get("email") as string;
  const message = searchParams.get("message") as string;
  const language = searchParams.get("language") as Language;

  const errorMessage = MESSAGES[language];
  const subject = EMAIL_MESSAGE[language]?.subject || "sarahschmidt.cat";

  if (!message || !email || !username) {
    return Response.json({ error: errorMessage?.error }, { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Sarah Schmidt <contacte@sarahschmidt.cat>",
      to: ["sakschmidt@gmail.com", email],
      subject: subject,
      react: (await SendConfirmation({
        username,
        message,
        email,
        language,
      })) as React.ReactElement,
    });

    if (error) {
      return Response.json(
        { message: errorMessage?.error, error },
        { status: 400 }
      );
    }

    return Response.json(
      { message: errorMessage?.success, data },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: errorMessage?.error, error },
      { status: 500 }
    );
  }
}
