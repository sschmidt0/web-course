import React from "react";

export interface IntroTextProps {
  className?: string;
  text: string;
}

export const IntroText: React.FC<IntroTextProps> = ({ className, text }) => {
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
};
