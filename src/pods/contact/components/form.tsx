import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLanguageStore } from "@/store";
import { useSendEmail } from "../contact.hook";
import { FormModel } from "@/common/model";
import { ContactFormValues, contactSchema } from "@/common/schemas";
import { ErrorMessage, Input, Textarea } from "@/components";
import { MESSAGES } from "@/db/messages";
import { handleShowToast } from "@/common/helper/handle-show-toast";
import styles from "./form.module.scss";

export interface FormProps {
  form: FormModel;
  className?: string;
}

export const Form: React.FC<FormProps> = ({ form, className }) => {
  const { language } = useLanguageStore();

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const { isError, isSending, isSuccess, sendEmail } = useSendEmail();

  const buttonText = isSending ? form.sendingButton : form.sendButton;
  const isDisabled = isSubmitting || isSending;

  const errorMessage = MESSAGES[language].error;
  const successMessage = MESSAGES[language].success;

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await sendEmail(data, language);
    } catch (error) {
      if (error) handleShowToast("error", errorMessage);
      console.log("Error sending email:", error);
    }
  };

  React.useEffect(() => {
    if (isSuccess) {
      reset();
      handleShowToast("success", successMessage);
    }
    if (isError) {
      handleShowToast("error", errorMessage);
    }
  }, [isSuccess, reset, isError, successMessage, errorMessage]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={[styles.container, className].join(" ")}
    >
      <Input
        label={form.username}
        name="username"
        placeholder={form.placeholderName}
        register={register}
      />
      {errors?.username?.message && (
        <ErrorMessage message={errors.username.message} />
      )}

      <Input
        label={form.email}
        name="email"
        placeholder={form.placeholderEmail}
        register={register}
        type="email"
      />
      {errors?.email?.message && (
        <ErrorMessage message={errors.email.message} />
      )}

      <Textarea
        label={form.message}
        name="message"
        placeholder={form.placeholderMessage}
        register={register}
      />
      {errors?.message?.message && (
        <ErrorMessage message={errors.message.message} />
      )}

      <input
        className={styles.button}
        disabled={isDisabled}
        type="submit"
        value={buttonText}
      />
    </form>
  );
};
