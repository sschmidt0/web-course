import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sarahschmidt.es",
  description:
    "Aprende a crear tu propia página web desde cero con HTML, CSS y JavaScript. Curso práctico para principiantes con sesiones presenciales en Barcelona. Impartido por una experta en desarrollo web y enseñanza. ¡Inscríbete ahora!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <div id="root">{children}</div>
        <div id="portal"></div>
      </body>
    </html>
  );
}
