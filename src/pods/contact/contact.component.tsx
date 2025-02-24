import { FormModel, IconListItemModel } from "../../common/model";
import { InfoBox } from "../../components";
import { PAGE_CONTACT } from "../../db/contact";
import { useLanguageStore } from "../../store";
import { Form } from "./components/form";
import styles from "./contact.module.scss";

export const Contact = () => {
  const { language } = useLanguageStore();
  const content = PAGE_CONTACT[language];

  const info = content.info as unknown as IconListItemModel;
  const form = content.form as FormModel;

  return (
    <div className={styles.container}>
      <InfoBox title={info.text} text={info.value} icon={info.icon} />
      <Form form={form} />
    </div>
  );
};
