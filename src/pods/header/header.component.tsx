"use client";

import React from "react";
import { LanguageNav } from "./components/language-nav";
import { Navbar } from "./components/navbar";
import { NavbarMobileIcon } from "./components/navbar-mobile-icon";
import styles from "./header.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <NavbarMobileIcon />
        <Navbar />
      </div>
      <LanguageNav />
    </div>
  );
};
