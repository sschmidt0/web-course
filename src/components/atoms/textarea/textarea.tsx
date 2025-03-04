import React from "react";
import styles from "./textarea.module.scss";
import { UseFormRegister } from "react-hook-form";
import { InputType } from "../../../common/model";

export type TextareaProps = {
  label: string;
  name: InputType;
  register: UseFormRegister<{
    username: string;
    email: string;
    message: string;
  }>;
} & React.HTMLProps<HTMLTextAreaElement>;

export const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  placeholder,
  register,
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <textarea
        {...register(name)}
        className={styles.textarea}
        placeholder={placeholder}
      />
    </div>
  );
};
