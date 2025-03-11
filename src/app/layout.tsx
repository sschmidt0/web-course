import { HeaderContainer } from "@/pods/header";
import styles from "./layout.module.scss";
import "./global.styles.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div className={styles.root}>
          <HeaderContainer />
          {children}
        </div>
        <div id="portal"></div>
      </body>
    </html>
  );
}
