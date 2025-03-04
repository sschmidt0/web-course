import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import SendConfirmation from "@/emails/send-confirmation";
import { Language } from "@/common/model/language";
import { ERROR_MESSAGES } from "@/db/error-messages";
import { EMAIL_MESSAGE } from "@/db/email";
import { contactSchema } from "@/common/schemas";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest, language: Language) {
  const { message, email, username } = await req
    .json()
    .then((data) => contactSchema.parse(data));

  const errorMessage = ERROR_MESSAGES[language];
  const subject = EMAIL_MESSAGE[language].subject;

  if (!message || !email || !username) {
    return NextResponse.json({ error: errorMessage.error400 }, { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Sarah Schmidt <contact@sarahschmidt.es>",
      to: [email, "sakschmidt@gmail.com"],
      subject: subject,
      react: (await SendConfirmation({
        username,
        message,
        email,
      })) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json(
        { message: errorMessage.error400Message, error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: errorMessage.success, data },
      { status: 200 }
    );
  } catch (error) {
    console.error(errorMessage.error, error);
    return NextResponse.json(
      { message: errorMessage.error500, error },
      { status: 500 }
    );
  }
}
