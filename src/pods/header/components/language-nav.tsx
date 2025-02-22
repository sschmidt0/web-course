import { IconButton } from "../../../components/atoms/icon-button/icon-button";
import { useLanguageStore } from "../../../store";
import styles from "./language-nav.module.scss";

export const LanguageNav = () => {
  const { setLanguage } = useLanguageStore();

  return (
    <div className={styles.container}>
      <IconButton icon="catalan" onClick={() => setLanguage("catalan")} />
      <IconButton icon="spanish" onClick={() => setLanguage("spanish")} />
      <IconButton icon="english" onClick={() => setLanguage("english")} />
    </div>
  );
};
