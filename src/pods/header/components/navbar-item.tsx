import React from "react";
import { usePathname } from "next/navigation";
import styles from "./navbar-item.module.scss";
import Link from "next/link";

export interface NavbarItemProps {
  text: string;
  route: string;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ route, text }) => {
  const pathname = usePathname();
  const isActiveRoute = pathname === route;

  return (
    <li className={isActiveRoute ? styles["item-active"] : styles.item}>
      <Link href={route}>{text}</Link>
    </li>
  );
};
