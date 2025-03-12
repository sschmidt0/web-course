export const isSmallScreen = () => {
  if (typeof window !== "undefined") {
    const width = window.innerWidth;

    return width < 555;
  }

  return false;
};
