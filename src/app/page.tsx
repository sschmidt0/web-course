import type { Metadata } from "next";
import { AboutContainer } from "@/pods/about";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Sarah Schmidt - Frontend & AI Developer",
  description:
    "Frontend Developer con más de 3 años de experiencia, actualmente en transición hacia AI Software Developer. Especializada en React, TypeScript y tecnologías web modernas. Cursando programa de IBM en Inteligencia Artificial.",
};

export default function HomePage() {
  return <AboutContainer />;
}
