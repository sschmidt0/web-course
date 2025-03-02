import React from "react";
import styles from "./input.module.scss";
import { UseFormRegister } from "react-hook-form";
import { InputType } from "../../../common/model";

export type InputProps = {
  label: string;
  name: InputType;
  register: UseFormRegister<{ name: string; email: string; message: string }>;
  type?: string;
} & React.HTMLProps<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  register,
  type = "text",
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        {...register(name)}
        className={styles.input}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
