import React from "react";
import { ArrayText, Title } from "@/components";
import { PAGE_ABOUT } from "@/db/about";
import { useLanguageStore } from "@/store";
import { Picture } from "./components/picture";

export const About: React.FC = () => {
  const { language } = useLanguageStore();
  const content = PAGE_ABOUT[language];
  const title = content.title;

  return (
    <div>
      <Title text={title} />
      <div>
        <Picture />
        <ArrayText textos={content.author} />
      </div>
    </div>
  );
};
