import React from "react";
import { UnderlineListProps } from "@/components/organisms";
import styles from "./underline-list-item.module.scss";

export interface UnderlineListItemProps {
  item: UnderlineListProps["items"][number];
}

export const UnderlineListItem: React.FC<UnderlineListItemProps> = ({
  item,
}) => {
  return (
    <div className={styles.container}>
      <div>{item.text}</div>
      <div className={styles["coloured-div"]}>{item.years}</div>
    </div>
  );
};
