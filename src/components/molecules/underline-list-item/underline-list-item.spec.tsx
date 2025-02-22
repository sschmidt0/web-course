import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import {
  UnderlineListItem,
  UnderlineListItemProps,
} from "./underline-list-item";

describe("UnderlineListItem", () => {
  let props: UnderlineListItemProps;

  beforeEach(() => {
    props = {
      icon: "sampleIcon",
      text: "Sample Text",
      value: "Sample Value",
    };
  });

  it("renders correctly with given props", () => {
    render(<UnderlineListItem {...props} />);

    const textElement = screen.getByText(props.text);
    const valueElement = screen.getByText(props.value);

    expect(textElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });
});
