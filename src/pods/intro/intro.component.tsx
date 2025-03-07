import { useNavigate } from "react-router-dom";
import { IconListItemModel } from "../../common/model";
import { InfoBox, Title, Button } from "../../components";
import { IconList } from "../../components/organisms/icon-list/icon-list";
import { PAGES_HOME } from "../../db/intro";
import styles from "./intro.module.scss";
import { useLanguageStore } from "../../store";
import { isSmallScreen } from "../../common/helper";
import { IntroText } from "./components/intro-text";
import { OverViewItems } from "./components/overview-items";

export const Intro = () => {
  const { language } = useLanguageStore();
  const navigate = useNavigate();
  const isMobile = isSmallScreen();

  const content = PAGES_HOME[language].pageIntro;
  const firstBlockItems = content.firstBlock
    .items as unknown as IconListItemModel[];
  const secondBlockItems = content.secondBlock
    .items as unknown as IconListItemModel[];
  const thirdBlockItems = content.thirdBlock
    .items as unknown as IconListItemModel[];

  const handleCtaClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <Title text={content.title} />
      <InfoBox text={content.lema} title={content.subTitle} icon={"code"}>
        <Button text={content.ctaButton} onClick={handleCtaClick} />
      </InfoBox>
      <IntroText className={styles.text} textos={content.textos} />
      <IconList
        className={styles["list-margin"]}
        title={content.firstBlock.title}
        items={firstBlockItems}
      />
      <OverViewItems items={secondBlockItems} />
      <IconList
        className={styles["list-margin"]}
        title={content.thirdBlock.title}
        items={thirdBlockItems}
      />
      {isMobile && (
        <Button
          className={styles.button}
          text={content.ctaButton}
          onClick={handleCtaClick}
        />
      )}
    </>
  );
};
