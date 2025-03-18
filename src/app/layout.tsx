import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
        <SpeedInsights />
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? ""}
        />
      </body>
    </html>
  );
}
