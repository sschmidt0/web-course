import React from "react";
import styles from "./icon-list-item.module.scss";
import { IconListItemModel } from "../../../common/model";
import { APP_ICONS } from "../../../common/app-icons";

export type IconListItemProps = IconListItemModel;

export const IconListItem: React.FC<IconListItemProps> = ({
  icon,
  text,
  value,
  value2,
}) => {
  const itemIcon = APP_ICONS[icon as keyof typeof APP_ICONS];

  return (
    <div className={styles.container}>
      <div className={styles.icon}>{itemIcon}</div>
      <div>
        <div className={styles.title}>{text}</div>
        <div>{value}</div>
        {value2 && <div className={styles.info}>{value2}</div>}
      </div>
    </div>
  );
};
