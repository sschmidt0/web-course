import React from "react";
import styles from "./title.module.scss";

export interface TitleProps {
  text: string;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ text, className }) => {
  return <h1 className={(styles.title, className)}>{text}</h1>;
};
