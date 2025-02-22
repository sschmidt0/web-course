import React from "react";

import styles from "./navbar-item.module.scss";
import { Link, useLocation } from "react-router-dom";

export interface NavbarItemProps {
  text: string;
  route: string;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ route, text }) => {
  const location = useLocation();
  const { pathname } = location;
  const isActiveRoute = pathname === route;

  return (
    <li className={isActiveRoute ? styles["item-active"] : styles.item}>
      <Link to={route}>{text}</Link>
    </li>
  );
};
