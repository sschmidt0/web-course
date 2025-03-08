import React from "react";
import { ArrayText, InfoBoxList, Title } from "@/components";
import { PAGE_ABOUT } from "@/db/about";
import { useLanguageStore } from "@/store";
import { Picture } from "./components/picture";
import styles from "./about.module.scss";

export const About: React.FC = () => {
  const { language } = useLanguageStore();
  const content = PAGE_ABOUT[language];
  const title = content.title;
  const firstBlockItems = content.firstBlock;
  const secondBlockTitle = content.secondBlock.title;
  const secondBlockItems = content.secondBlock.items;

  return (
    <div className={styles.container}>
      <Title text={title} />
      <div className={styles["intro-container"]}>
        <Picture />
        <ArrayText className={styles["author-text"]} textos={firstBlockItems} />
      </div>
      <InfoBoxList
        itemStyles={styles.items}
        title={secondBlockTitle}
        items={secondBlockItems}
      />
    </div>
  );
};
