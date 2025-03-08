import React from "react";

export interface ArrayTextProps {
  className?: string;
  textos: { id: number; text: string }[];
  withBold?: boolean;
}

export const ArrayText: React.FC<ArrayTextProps> = ({
  className,
  textos,
  withBold,
}) => {
  return (
    <div className={className}>
      {textos.map((text) => {
        const isBold = withBold && (text.id === 1 || text.id === textos.length);
        return (
          <p key={text.id} style={{ fontWeight: isBold ? "800" : "400" }}>
            {text.text}
          </p>
        );
      })}
    </div>
  );
};
