import { IconListItemModel } from "../../common/model";
import { Button, InfoBox, Title } from "../../components";
import { useLanguageStore } from "../../store";
import { PAGES_SYLLABUS } from "../../db/syllabus";
import { ButtonContainer } from "./components/button-container";
import styles from "./syllabus.module.scss";

export const Syllabus = () => {
  const { language } = useLanguageStore();
  const content = PAGES_SYLLABUS[language];
  const items = content.items as IconListItemModel[];
  const lastItem = items.length - 1;

  const handleClickDetails = () => {};

  return (
    <>
      <Title text={content.title} />
      <div className={styles["item-container"]}>
        {items.map((item) => {
          if (items.indexOf(item) === lastItem) {
            return (
              <InfoBox
                key={item.text}
                duration={item.duration}
                icon={item.icon}
                text={item.value}
                title={item.text}
              >
                <ButtonContainer />
              </InfoBox>
            );
          }

          return (
            <InfoBox
              key={item.text}
              duration={item.duration}
              icon={item.icon}
              text={item.value}
              title={item.text}
            >
              <Button
                text={content.detailsButton}
                onClick={handleClickDetails}
              />
            </InfoBox>
          );
        })}
      </div>
    </>
  );
};
