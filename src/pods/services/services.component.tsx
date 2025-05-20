"use client";

import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/store";
import { PAGES_SERVICES } from "@/db/services";
import { Button, DescriptionBox, InfoBox, Title } from "@/components";
import styles from "./services.module.scss";
import { isSmallScreen } from "@/common/helper";

export const ServicesComponent = () => {
  const router = useRouter();
  const { language } = useLanguageStore();
  const content = PAGES_SERVICES[language];
  const firstInfoBox = content.infoBox[0];
  const secondInfoBox = content.infoBox[1];

  const handleCtaClick = () => {
    router.push("/contact");
  };

  const isMobile = isSmallScreen();

  return (
    <>
      <div className={styles["header-container"]}>
        <Title text={content.title} />
        {isMobile && (
          <Button text={content.ctaButton} onClick={handleCtaClick} />
        )}
      </div>
      <div className={styles["item-container"]}>
        <div className={styles.box}>
          <InfoBox
            icon={firstInfoBox.icon}
            text={firstInfoBox.value}
            title={firstInfoBox.text}
          />
          <DescriptionBox
            items={firstInfoBox.detailItems}
            title={firstInfoBox.detailTitle}
          />
        </div>

        <div className={styles.box}>
          <InfoBox
            icon={secondInfoBox.icon}
            text={secondInfoBox.value}
            title={secondInfoBox.text}
          />
          <DescriptionBox
            items={secondInfoBox.detailItems}
            title={secondInfoBox.detailTitle}
          />
        </div>
      </div>
      <p className={styles["cta-text"]}>{content.ctaText}</p>
      <Button text={content.ctaButton} onClick={handleCtaClick} />
    </>
  );
};
