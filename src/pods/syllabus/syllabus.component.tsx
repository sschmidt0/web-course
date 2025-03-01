import { IconListItemModel } from "../../common/model";
import { Button, InfoBox, Title } from "../../components";
import { useActiveSessionStore, useLanguageStore } from "../../store";
import { PAGES_SYLLABUS } from "../../db/syllabus";
import styles from "./syllabus.module.scss";
import { useNavigate } from "react-router-dom";

export const Syllabus = () => {
  const navigate = useNavigate();
  const { language } = useLanguageStore();
  const { setSessionIndex } = useActiveSessionStore();
  const content = PAGES_SYLLABUS[language];
  const items = content.items as IconListItemModel[];
  const lastItem = items.length - 1;

  const handleCtaClick = () => {
    navigate("/contact");
  };

  const handleClickDetails = (id: number) => {
    const newId = id - 1;
    setSessionIndex(newId);
    navigate("/details", { state: { id: newId } });
  };

  return (
    <>
      <div className={styles["header-container"]}>
        <Title text={content.title} />
        <Button text={content.ctaButton} onClick={handleCtaClick} />
      </div>
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
                <Button text={content.ctaButton} onClick={handleCtaClick} />
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
                onClick={() => handleClickDetails(item.id)}
              />
            </InfoBox>
          );
        })}
      </div>
    </>
  );
};
