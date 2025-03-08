import React from "react";
import styles from "./array-text.module.scss";
import cx from "classnames";

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
    </div>
  );
};
