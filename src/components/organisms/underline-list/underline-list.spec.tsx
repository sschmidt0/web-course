import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { UnderlineList, UnderlineListProps } from "./underline-list";

describe("UnderlineList", () => {
  let props: UnderlineListProps;

  beforeEach(() => {
    props = {
      title: "Sample Title",
      items: [
        { icon: "sampleIcon1", text: "Sample Text 1", value: "Sample Value 1" },
        { icon: "sampleIcon2", text: "Sample Text 2", value: "Sample Value 2" },
      ],
    };
  });
  it("renders correctly with given props", () => {
    render(<UnderlineList {...props} />);

    const titleElement = screen.getByText("Sample Title");
    const item1TextElement = screen.getByText("Sample Text 1");
    const item1ValueElement = screen.getByText("Sample Value 1");
    const item2TextElement = screen.getByText("Sample Text 2");
    const item2ValueElement = screen.getByText("Sample Value 2");

    expect(titleElement).toBeInTheDocument();
    expect(item1TextElement).toBeInTheDocument();
    expect(item1ValueElement).toBeInTheDocument();
    expect(item2TextElement).toBeInTheDocument();
    expect(item2ValueElement).toBeInTheDocument();
  });
});
