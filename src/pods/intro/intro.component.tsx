import { IconListItemModel } from "../../common/model";
import { InfoBox, Title, Button, UnderlineList } from "../../components";
import { IconList } from "../../components/organisms/icon-list/icon-list";
import { PAGES } from "../../db/pages";
import { FaCode } from "react-icons/fa6";
import styles from "./intro.module.scss";
import { useLanguageStore } from "../../store";

export const Intro = () => {
  const { language } = useLanguageStore();
  const content = PAGES[language].pageIntro;
  const firstBlockItems = content.firstBlock
    .items as unknown as IconListItemModel[];
  const secondBlockItems = content.secondBlock
    .items as unknown as IconListItemModel[];
  const thirdBlockItems = content.thirdBlock
    .items as unknown as IconListItemModel[];

  const handleCtaClick = () => {};

  return (
    <>
      <Title text={content.title} />
      <InfoBox text={content.lema} title={content.subTitle} icon={<FaCode />}>
        <Button text={content.ctaButton} onClick={handleCtaClick} />
      </InfoBox>
      <IconList
        className={styles["list-margin"]}
        title={content.firstBlock.title}
        items={firstBlockItems}
      />
      <UnderlineList
        className={styles["list-margin"]}
        title={content.secondBlock.title}
        items={secondBlockItems}
      />
      <IconList
        className={styles["list-margin"]}
        title={content.thirdBlock.title}
        items={thirdBlockItems}
      />
    </>
  );
};
