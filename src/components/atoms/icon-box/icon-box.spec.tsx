import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { IconBox, IconBoxProps } from "./icon-box";

describe("IconBox", () => {
  let props: IconBoxProps;

  beforeEach(() => {
    props = {
      icon: <span>Sample Icon</span>,
    };
  });

  it("renders correctly with given icon", () => {
    render(<IconBox {...props} />);

    const iconElement = screen.getByText("Sample Icon");

    expect(iconElement).toBeInTheDocument();
  });
});
