import React from "react";
import {
  IconListItem,
  IconListItemProps,
} from "../../molecules/icon-list-item";
import styles from "./icon-list.module.scss";

export interface IconListProps {
  className?: string;
  title: string;
  items: IconListItemProps[];
}

export const IconList: React.FC<IconListProps> = ({
  items,
  title,
  className,
}) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <div className={styles.list}>
        {items.map((item) => (
          <IconListItem key={item.text} {...item} />
        ))}
      </div>
    </div>
  );
};
