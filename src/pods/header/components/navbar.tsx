import { NAV_TEXT, NAVBAR_ITEMS } from "@/db/navbar";
import { NavbarItem } from "./navbar-item";
import styles from "./navbar.module.scss";
import { useLanguageStore } from "@/store";

export const Navbar = () => {
  const { language } = useLanguageStore();
  return (
    <nav className={styles.container}>
      <ul className={styles["list-container"]}>
        {NAVBAR_ITEMS.map((item) => {
          const navKey = item.text.toLowerCase() as keyof typeof NAV_TEXT;
          const textObj = NAV_TEXT[navKey];
          const itemText = textObj[language];

          return (
            <NavbarItem key={item.id} route={item.route} text={itemText} />
          );
        })}
      </ul>
    </nav>
  );
};
