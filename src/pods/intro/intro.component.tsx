"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PAGES_HOME } from "@/db/intro";
import { useLanguageStore } from "@/store";
import {
  Title,
  InfoBox,
  Button,
  ArrayText,
  IconList,
  InfoBoxList,
} from "@/components";
import { IconListItemModel } from "@/common/model";
import { isSmallScreen } from "@/common/helper";
import styles from "./intro.module.scss";

export const Intro: React.FC = () => {
  const { language } = useLanguageStore();
  const router = useRouter();
  const isMobile = isSmallScreen();

  const content = PAGES_HOME[language].pageIntro;
  const firstBlockItems = content.firstBlock
    .items as unknown as IconListItemModel[];
  const firstBlockTitle = content.firstBlock.title;
  const secondBlockItems = content.secondBlock
    .items as unknown as IconListItemModel[];
  const secondBlockTitle = content.secondBlock.title;
  const thirdBlockItems = content.thirdBlock
    .items as unknown as IconListItemModel[];
  const thirdBlockTitle = content.thirdBlock.title;

  const handleCtaClick = () => {
    router.push("/contact");
  };

  return (
    <>
      <Title text={content.title} />
      <InfoBox text={content.lema} title={content.subTitle} icon={"code"}>
        <Button text={content.ctaButton} onClick={handleCtaClick} />
      </InfoBox>
      <ArrayText className={styles.text} textos={content.textos} withBold />
      <IconList
        className={styles["list-margin"]}
        title={firstBlockTitle}
        items={firstBlockItems}
      />
      <InfoBoxList
        className={styles["info-box"]}
        itemStyles={styles.items}
        items={secondBlockItems}
        title={secondBlockTitle}
      />
      <IconList
        className={styles["list-margin"]}
        title={thirdBlockTitle}
        items={thirdBlockItems}
      />
      {isMobile && (
        <Button
          className={styles.button}
          text={content.ctaButton}
          onClick={handleCtaClick}
        />
      )}
    </>
  );
};
