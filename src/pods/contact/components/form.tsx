import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage, Input, Textarea } from "../../../components";
import { FormModel } from "../../../common/model";
import styles from "./form.module.scss";

const contactSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Email is not valid").nonempty("Email is required"),
  message: z.string().nonempty("Message is required"),
});

export interface FormProps {
  form: FormModel;
}

export const Form: React.FC<FormProps> = ({ form }) => {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: FieldValues) => {
    console.log(data);

    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <Input
        label={form.name}
        name="name"
        placeholder={form.placeholderName}
        register={register}
      />
      {errors?.name?.message && <ErrorMessage message={errors.name.message} />}

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
        disabled={isSubmitting}
        type="submit"
        value={form.sendButton}
      />
    </form>
  );
};
