import React from "react";
import cx from "classnames";
import styles from "./info-box.module.scss";
import { APP_ICONS } from "../../../common/app-icons";
import { IconBox } from "../../atoms";

export interface InfoBoxProps {
  children?: React.ReactNode;
  className?: string;
  duration?: string;
  icon?: React.ReactNode;
  text: string;
  title?: string;
}

export const InfoBox: React.FC<InfoBoxProps> = ({
  children,
  className,
  duration,
  icon,
  text,
  title,
}) => {
  const itemIcon = APP_ICONS[icon as keyof typeof APP_ICONS];

  return (
    <div className={cx(styles.container, className)}>
      {icon && <IconBox icon={itemIcon} />}
      {duration && <p className={styles.duration}>{duration}</p>}
      {title && <h3 className={styles.title}>{title}</h3>}
      <p>{text}</p>
      <div className={styles["child-container"]}>{children}</div>
    </div>
  );
};
