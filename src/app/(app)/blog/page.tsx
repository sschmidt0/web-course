import type { Metadata } from "next";
import { BlogContainer } from "@/pods/blog";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Blog - sarahschmidt.es",
  description:
    "Mis avances y experiencias en el curso de IBM AI Software Developer. Actualizaciones regulares sobre mi transición de Frontend Developer a AI Software Developer.",
};

export default function BlogPage() {
  return <BlogContainer />;
}
