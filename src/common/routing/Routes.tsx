import { Routes, Route } from "react-router-dom";
import {
  AboutScreen,
  ContactScreen,
  DetailScreen,
  IntroScreen,
  NotFoundScreen,
  SyllabusScreen,
} from "../../screens";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<IntroScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/details" element={<DetailScreen />} />
      <Route path="/syllabus" element={<SyllabusScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};
