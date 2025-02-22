import React from "react";
import { IconListItemProps } from "../../molecules/icon-list-item";
import { UnderlineListItem } from "../../molecules";

export interface UnderlineListProps {
  className?: string;
  title: string;
  items: IconListItemProps[];
}

export const UnderlineList: React.FC<UnderlineListProps> = ({
  items,
  title,
  className,
}) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <div>
        {items.map((item) => (
          <UnderlineListItem key={item.text} {...item} />
        ))}
      </div>
    </div>
  );
};
