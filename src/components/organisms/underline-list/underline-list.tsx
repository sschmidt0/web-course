import React from "react";
import { UnderlineListItem } from "../../molecules";
import styles from "./underline-list.module.scss";
import { APP_ICONS } from "@/common/app-icons";

export interface UnderlineListProps {
  className?: string;
  icon: string;
  items: { id: number; text: string; years: string }[];
  title: string;
}

export const UnderlineList: React.FC<UnderlineListProps> = ({
  className,
  icon,
  items,
  title,
}) => {
  const itemIcon = APP_ICONS[icon as keyof typeof APP_ICONS];

  return (
    <div className={className}>
      <h2>{title}</h2>
      <div className={styles.container}>
        <div className={styles.icon}>{itemIcon}</div>
        {items.map((item) => (
          <UnderlineListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
