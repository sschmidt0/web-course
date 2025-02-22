import { NAVBAR_ITEMS } from "../../../db/navbar";
import { NavbarItem } from "./navbar-item";
import styles from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <nav>
      <ul className={styles.container}>
        {NAVBAR_ITEMS.map((item) => (
          <NavbarItem key={item.id} {...item} />
        ))}
      </ul>
    </nav>
  );
};
