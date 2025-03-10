import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { UnderlineList, UnderlineListProps } from "./underline-list";

describe("UnderlineList", () => {
  let props: UnderlineListProps;

  beforeEach(() => {
    props = {
      title: "Sample Title",
      icon: "sampleIcon1",
      items: [
        { id: 1, text: "Sample Text 1", years: "2025" },
        { id: 2, text: "Sample Text 2", years: "2024" },
      ],
    };
  });
  it("renders correctly with given props", () => {
    render(<UnderlineList {...props} />);

    const titleElement = screen.getByText("Sample Title");
    const item1TextElement = screen.getByText("Sample Text 1");
    const item1ValueElement = screen.getByText("2025");
    const item2TextElement = screen.getByText("Sample Text 2");
    const item2ValueElement = screen.getByText("2024");

    expect(titleElement).toBeInTheDocument();
    expect(item1TextElement).toBeInTheDocument();
    expect(item1ValueElement).toBeInTheDocument();
    expect(item2TextElement).toBeInTheDocument();
    expect(item2ValueElement).toBeInTheDocument();
  });
});
