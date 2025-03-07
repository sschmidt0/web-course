import React from "react";

export interface ArrayTextProps {
  className?: string;
  textos: string[];
  withBold?: boolean;
}

export const ArrayText: React.FC<ArrayTextProps> = ({
  className,
  textos,
  withBold,
}) => {
  return (
    <div className={className}>
      {textos.map((text, index) => {
        const isBold = withBold && (index === 0 || index === textos.length - 1);
        return (
          <p key={index} style={{ fontWeight: isBold ? "800" : "400" }}>
            {text}
          </p>
        );
      })}
    </div>
  );
};
