import { Button } from "../../../components";
import { PAGES_SYLLABUS } from "../../../db/syllabus";
import { useLanguageStore } from "../../../store";
import styles from "./button-container.module.scss";

export const ButtonContainer = () => {
  const { language } = useLanguageStore();
  const content = PAGES_SYLLABUS[language];

  const handleCtaClick = () => {};
  const handleDownloadClick = () => {};

  return (
    <div className={styles["button-container"]}>
      <Button text={content.ctaButton} onClick={handleCtaClick} />
      <Button
        secondary={true}
        text={content.downloadButton}
        onClick={handleDownloadClick}
      />
    </div>
  );
};
