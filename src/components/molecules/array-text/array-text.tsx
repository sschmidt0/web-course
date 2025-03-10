import React from "react";
import cx from "classnames";
import styles from "./array-text.module.scss";
import { APP_ICONS } from "@/common/app-icons";

export interface ArrayTextProps {
  className?: string;
  textos: { id: number; text: string }[];
  withBold?: boolean;
}

export const ArrayText: React.FC<ArrayTextProps> = ({
  className,
  textos,
  withBold,
}) => {
  const linkedinIcon = APP_ICONS["linkedin" as keyof typeof APP_ICONS];
  const githubIcon = APP_ICONS["github" as keyof typeof APP_ICONS];

  return (
    <div className={cx(styles.container, className)}>
      {textos.map((text) => {
        const isBold = withBold && (text.id === 1 || text.id === textos.length);
        return (
          <p key={text.id} style={{ fontWeight: isBold ? "800" : "400" }}>
            {text.text}
          </p>
        );
      })}
      <div className={styles["icon-container"]}>
        <a
          href="https://www.linkedin.com/in/sschmidt0/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.icon}>{linkedinIcon}</div>
        </a>
        <a
          href="https://github.com/sschmidt0/sschmidt0"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.icon}>{githubIcon}</div>
        </a>
      </div>
    </div>
  );
};
