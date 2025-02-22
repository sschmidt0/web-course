import { Routes, Route } from "react-router-dom";
import { Intro } from "../../pods/intro/intro.component";
import { Syllabus } from "../../pods/syllabus/syllabus.component";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/syllabus" element={<Syllabus />} />
    </Routes>
  );
};
