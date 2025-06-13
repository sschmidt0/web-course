"use client";

import React from "react";
import { useLanguageStore } from "../../store";
import { PAGE_CONTACT } from "../../db/contact";
import { FormModel, IconListItemModel } from "../../common/model";
import { InfoBox, Title } from "../../components";
import { Form } from "./components/form";
import styles from "./contact.module.scss";

export const Contact: React.FC = () => {
  const { language } = useLanguageStore();
  const content = PAGE_CONTACT[language];

  const info = content.info as unknown as IconListItemModel;
  const form = content.form as FormModel;

  return (
    <div className={styles.container}>
      <Title text={info.text} />
      <InfoBox text={info.value} icon={info.icon} />
      <Form className={styles.form} form={form} />
    </div>
  );
};
