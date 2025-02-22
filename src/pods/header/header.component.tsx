import { TextButton } from "../../components/atoms/text-button";
import { useLanguageStore } from "../../store";
import { Navbar } from "./components/navbar";
import styles from "./header.module.scss";

export const Header = () => {
  const { setLanguage } = useLanguageStore();

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles["language-container"]}>
        <TextButton text="català" onClick={() => setLanguage("catalan")} />
        <TextButton text="español" onClick={() => setLanguage("spanish")} />
        <TextButton text="english" onClick={() => setLanguage("english")} />
      </div>
    </div>
  );
};
