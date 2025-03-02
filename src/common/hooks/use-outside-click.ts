import React from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void,
  isActive: boolean
) => {
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive, ref, callback]);
};
