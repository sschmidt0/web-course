import { useLocation } from "react-router-dom";
import { IconListItemModel } from "../../common/model";
import {
  BoxList,
  InfoBox,
  Title,
  TitleDescriptionList,
} from "../../components";
import { PAGES_SYLLABUS } from "../../db/syllabus";
import { useLanguageStore } from "../../store";
import styles from "./detail.module.scss";
import { PAGE_DETAIL_COURSE } from "../../db/detail";
import { Notes } from "./components/notes";

export const Detail = () => {
  const location = useLocation();
  const { language } = useLanguageStore();
  const id = location.state.id;
  const pageContent = PAGE_DETAIL_COURSE[language].sessions?.[id];
  const itemContent = PAGES_SYLLABUS[language];
  const learningObjectives = pageContent?.content;
  const practicalExercises = pageContent?.practicalExercises;
  const notes = PAGE_DETAIL_COURSE[language].notes;

  const item = itemContent.items?.[id] as IconListItemModel;

  return (
    <div className={styles.container}>
      <Title text={pageContent.title} />
      <div className={styles["item-container"]}>
        <InfoBox
          key={item.text}
          duration={item.duration}
          icon={item.icon}
          text={item.value}
          title={item.text}
        />
        <h2>{pageContent.objective}</h2>
        <TitleDescriptionList content={learningObjectives} />
        <h2>{pageContent.exercises}</h2>
        <p className={styles.description}>{pageContent.subtitle}</p>
        {practicalExercises && <BoxList content={practicalExercises} />}
        <Notes notes={notes} />
      </div>
    </div>
  );
};
