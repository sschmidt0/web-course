import React from "react";
import { PAGE_ABOUT } from "@/db/about";
import { useLanguageStore } from "@/store";
import { ArrayText, InfoBoxList, Title, UnderlineList } from "@/components";
import { Picture } from "./components/picture";
import { APP_ICONS } from "@/common/app-icons";
import styles from "./about.module.scss";

export const About: React.FC = () => {
  const { language } = useLanguageStore();
  const content = PAGE_ABOUT[language];
  const title = content.title;
  const firstBlockItems = content.firstBlock;
  const secondBlockTitle = content.secondBlock.title;
  const secondBlockItems = content.secondBlock.items;
  const thirdBlockTitle = content.thirdBlock.title;
  const thirdBlockItems = content.thirdBlock.items;
  const thirdBlockIcon = content.thirdBlock.icon;
  const fourthBlockTitle = content.fourthBlock.title;
  const fourthBlockItems = content.fourthBlock.items;
  const fourthBlockIcon = content.fourthBlock.icon;

  const linkedinIcon = APP_ICONS["linkedin" as keyof typeof APP_ICONS];
  const githubIcon = APP_ICONS["github" as keyof typeof APP_ICONS];

  return (
    <div className={styles.container}>
      <Title text={title} />
      <div className={styles["intro-container"]}>
        <Picture />
        <ArrayText className={styles["author-text"]} textos={firstBlockItems}>
          <div className={styles["icon-container"]}>
            <a
              href="https://www.linkedin.com/in/sschmidt0/"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.icon}>{linkedinIcon}</div>
            </a>
            <a
              href="https://github.com/sschmidt0/sschmidt0"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.icon}>{githubIcon}</div>
            </a>
          </div>
        </ArrayText>
      </div>
      <InfoBoxList
        itemStyles={styles.items}
        title={secondBlockTitle}
        items={secondBlockItems}
      />
      <div className={styles["underline-container"]}>
        <UnderlineList
          title={thirdBlockTitle}
          icon={thirdBlockIcon}
          items={thirdBlockItems}
        />
        <UnderlineList
          title={fourthBlockTitle}
          icon={fourthBlockIcon}
          items={fourthBlockItems}
        />
      </div>
    </div>
  );
};
