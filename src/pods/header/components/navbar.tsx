import { NAV_TEXT, NAVBAR_ITEMS } from "@/db/navbar";
import { NavbarItem } from "./navbar-item";
import styles from "./navbar.module.scss";
import { useLanguageStore } from "@/store";

export const Navbar = () => {
  const { language } = useLanguageStore();

  // Mapeo correcto entre los textos de NAVBAR_ITEMS y las claves de NAV_TEXT
  const textMapping: Record<string, keyof typeof NAV_TEXT> = {
    Home: "home",
    Blog: "blog",
    "Web Course": "webCourse",
    Services: "services",
    Contact: "contact",
  };

  return (
    <nav className={styles.container}>
      <ul className={styles["list-container"]}>
        {NAVBAR_ITEMS.map((item) => {
          const navKey = textMapping[item.text];
          const textObj = NAV_TEXT[navKey];
          const itemText = textObj ? textObj[language] : item.text;

          return (
            <NavbarItem key={item.id} route={item.route} text={itemText} />
          );
        })}
      </ul>
    </nav>
  );
};
