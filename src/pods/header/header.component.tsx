import { isSmallScreen } from "../../common/helper";
import { LanguageNav } from "./components/language-nav";
import { Navbar } from "./components/navbar";
import { NavbarMobileIcon } from "./components/navbar-mobile-icon";
import styles from "./header.module.scss";

export const Header = () => {
  const showNavbarMobile = isSmallScreen();

  return (
    <div className={styles.container}>
      {showNavbarMobile ? <NavbarMobileIcon /> : <Navbar />}
      <LanguageNav />
    </div>
  );
};
