import React from "react";

export interface IntroTextProps {
  className?: string;
  textos: string[];
}

export const IntroText: React.FC<IntroTextProps> = ({ className, textos }) => {
  return (
    <div className={className}>
      {textos.map((text, index) => {
        const isBold = index === 0 || index === textos.length - 1;
        return (
          <p key={index} style={{ fontWeight: isBold ? "800" : "400" }}>
            {text}
          </p>
        );
      })}
    </div>
  );
};
