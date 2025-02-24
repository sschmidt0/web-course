import React from "react";
import styles from "./textarea.module.scss";

export interface TextareaProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  onChange,
  placeholder,
  value,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.container}>
      <label>{label}</label>
      <textarea
        className={styles.textarea}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
