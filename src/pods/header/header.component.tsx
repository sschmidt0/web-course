import { LanguageNav } from "./components/language-nav";
import { Navbar } from "./components/navbar";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <LanguageNav />
    </div>
  );
};
