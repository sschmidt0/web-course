import React from "react";
import styles from "./error-message.module.scss";

export interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <div className={styles.error}>{message}</div>;
};
