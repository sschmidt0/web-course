import React from "react";
import { ContactFormValues } from "@/common/schemas";

export const useSendEmail = () => {
  const [isSending, setIsSending] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const sendEmail = async (data: ContactFormValues) => {
    try {
      setIsSending(true);
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          message: data.message,
          username: data.username,
        }),
      });

      console.log({ response });

      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.log("Error sending email:", error);
      setIsError(true);
    } finally {
      setIsSending(false);
    }
  };

  return { isSending, isSuccess, isError, sendEmail };
};
