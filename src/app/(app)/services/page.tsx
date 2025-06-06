import { ServicesContainer } from "@/pods/services";
import { Metadata } from "next";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "sarahschmidt.es",
  description:
    "Aprende a crear tu propia página web desde cero con HTML, CSS y JavaScript. Curso práctico para principiantes con sesiones presenciales en Barcelona. Impartido por una experta en desarrollo web y enseñanza. ¡Inscríbete ahora!",
};

export default function ServicesPage() {
  return <ServicesContainer />;
}
