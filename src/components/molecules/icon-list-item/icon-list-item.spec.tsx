import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { IconListItem } from "./icon-list-item";

describe("IconListItem", () => {
  it("renders correctly with given props", () => {
    const props = {
      icon: "sampleIcon",
      text: "Sample Text",
      value: "Sample Value",
    };

    render(<IconListItem {...props} />);

    const textElement = screen.getByText(props.text);
    const valueElement = screen.getByText(props.value);

    expect(textElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });
});
