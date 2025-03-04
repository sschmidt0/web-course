import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage, Input, Textarea } from "../../../components";
import { FormModel } from "../../../common/model";
import styles from "./form.module.scss";
import { ContactFormValues, contactSchema } from "../../../common/schemas";
import { useSendEmail } from "../contact.hook";

export interface FormProps {
  form: FormModel;
}

export const Form: React.FC<FormProps> = ({ form }) => {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const { isError, isSending, isSuccess, sendEmail } = useSendEmail();

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await sendEmail(data);
    } catch (error) {
      console.log("Error sending email:", error);
    } finally {
      if (isSuccess) reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      {isError && <ErrorMessage message={"error sending email"} />}
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

      {isSending ? (
        <div>sending...</div>
      ) : (
        <input
          className={styles.button}
          disabled={isSubmitting}
          type="submit"
          value={form.sendButton}
        />
      )}
    </form>
  );
};
