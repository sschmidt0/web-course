"use client";

import React from "react";
import { useParams } from "next/navigation";
import { PAGE_DETAIL_COURSE } from "@/db/detail";
import { PAGES_SYLLABUS } from "@/db/syllabus";
import { useLanguageStore } from "@/store";
import { Title, InfoBox, TitleDescriptionList, BoxList } from "@/components";
import { Notes } from "./components/notes";
import { IconListItemModel } from "@/common/model";
import styles from "./detail.module.scss";

export const Detail: React.FC = () => {
  const params = useParams();
  const { language } = useLanguageStore();
  const id = parseInt(params.id as string);
  const pageContent = PAGE_DETAIL_COURSE[language].sessions?.[id];
  const itemContent = PAGES_SYLLABUS[language];
  const title = pageContent?.title;
  const learningObjectives = pageContent?.content;
  const practicalExercises = pageContent?.practicalExercises;
  const notes = PAGE_DETAIL_COURSE[language]?.notes;
  const item = itemContent.items?.[id] as IconListItemModel;

  return (
    <div className={styles.container}>
      <Title text={title} />
      <div className={styles["item-container"]}>
        <InfoBox
          key={item?.text}
          duration={item?.duration}
          icon={item?.icon}
          text={item?.value}
          title={item?.text}
        />
        <h2>{pageContent?.objective}</h2>
        <TitleDescriptionList content={learningObjectives} />
        <h2>{pageContent?.exercises}</h2>
        <p className={styles.description}>{pageContent?.subtitle}</p>
        {practicalExercises && <BoxList content={practicalExercises} />}
        <Notes notes={notes} />
      </div>
    </div>
  );
};
