import React from "react";
import { ContactFormValues } from "@/common/schemas";
import { Language } from "@/common/model/language";

export const useSendEmail = () => {
  const [isSending, setIsSending] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const sendEmail = async (data: ContactFormValues, language: Language) => {
    try {
      setIsSending(true);
      setIsError(false);

      const params = new URLSearchParams({
        email: data.email,
        message: data.message,
        username: data.username,
        language,
      }).toString();

      const response = await fetch(`/api/send?${params}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 400 || response.status === 500) {
        setIsError(true);
        return;
      }

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
