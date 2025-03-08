import React from "react";
import { IconListItemModel } from "@/common/model";
import { InfoBox } from "@/components";
import styles from "./info-box-list.module.scss";

export interface InfoBoxListProps {
  className?: string;
  items: IconListItemModel[];
  title: string;
}

export const InfoBoxList: React.FC<InfoBoxListProps> = ({
  className,
  items,
  title,
}) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles["item-container"]}>
        {items.map((item) => (
          <InfoBox
            key={item.id}
            className={className}
            text={item.value}
            title={item.text}
            icon={item.icon}
          >
            <p>{item?.value2}</p>
          </InfoBox>
        ))}
      </div>
    </div>
  );
};
