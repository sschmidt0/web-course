import React from "react";
import { IconListItemModel } from "@/common/model";
import { InfoBox } from "@/components";
import styles from "./overview-items.module.scss";

export interface OverViewItemsProps {
  items: IconListItemModel[];
}

export const OverViewItems: React.FC<OverViewItemsProps> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <InfoBox
          key={item.id}
          className={styles.item}
          text={item.value}
          title={item.text}
          icon={item.icon}
        >
          <p>{item?.value2}</p>
        </InfoBox>
      ))}
    </div>
  );
};
