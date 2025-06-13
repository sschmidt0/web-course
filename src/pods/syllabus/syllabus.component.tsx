"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PAGES_SYLLABUS } from "@/db/syllabus";
import { useActiveSessionStore, useLanguageStore } from "@/store";
import { Button, InfoBox, Title } from "@/components";
import { IconListItemModel } from "@/common/model";
import styles from "./syllabus.module.scss";

export const Syllabus: React.FC = () => {
  const router = useRouter();
  const { language } = useLanguageStore();
  const { setSessionIndex } = useActiveSessionStore();

  const content = PAGES_SYLLABUS[language];
  const items = content.items as IconListItemModel[];
  const lastItem = items.length - 1;

  const handleCtaClick = () => {
    router.push("/contact");
  };

  const handleClickDetails = (id: number) => {
    const newId = id - 1;
    setSessionIndex(newId);
    router.push(`/details/${newId}`);
  };

  return (
    <>
      <div className={styles["header-container"]}>
        <Title text={content.title} />
        <Button
          className={styles["fixed-button"]}
          text={content.ctaButton}
          onClick={handleCtaClick}
        />
      </div>
      <div className={styles["item-container"]}>
        {items.map((item) => {
          if (items.indexOf(item) === lastItem) {
            return (
              <React.Fragment key={item.icon.toString()}>
                <InfoBox
                  duration={item.duration}
                  icon={item.icon}
                  text={item.value}
                  title={item.text}
                />
                <Button
                  className={styles.button}
                  text={content.ctaButton}
                  onClick={handleCtaClick}
                />
              </React.Fragment>
            );
          }

          return (
            <InfoBox
              key={item.icon.toString()}
              duration={item.duration}
              icon={item.icon}
              text={item.value}
              title={item.text}
            >
              <Button
                text={content.detailsButton}
                onClick={() => handleClickDetails(item.id)}
              />
            </InfoBox>
          );
        })}
      </div>

      <div className={styles["floating-container"]}>
        <Button
          className={styles["floating-button"]}
          text={content.ctaButton}
          onClick={handleCtaClick}
        />
      </div>
    </>
  );
};
