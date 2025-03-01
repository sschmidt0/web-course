import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import {
  TitleDescriptionList,
  TitleDescriptionListProps,
} from "./title-description-list";

describe("TitleDescriptionList", () => {
  let props: TitleDescriptionListProps;

  beforeEach(() => {
    props = {
      content: [
        { title: "Title 1", content: ["Item 1.1", "Item 1.2"] },
        { title: "Title 2", content: ["Item 2.1", "Item 2.2"] },
      ],
    };
  });

  it("renders correctly with given content", () => {
    render(<TitleDescriptionList {...props} />);

    const title1Element = screen.getByText("Title 1");
    const item11Element = screen.getByText("Item 1.1");
    const item12Element = screen.getByText("Item 1.2");
    const title2Element = screen.getByText("Title 2");
    const item21Element = screen.getByText("Item 2.1");
    const item22Element = screen.getByText("Item 2.2");

    expect(title1Element).toBeInTheDocument();
    expect(item11Element).toBeInTheDocument();
    expect(item12Element).toBeInTheDocument();
    expect(title2Element).toBeInTheDocument();
    expect(item21Element).toBeInTheDocument();
    expect(item22Element).toBeInTheDocument();
  });

  it("renders an empty list when content is empty", () => {
    props.content = [];

    render(<TitleDescriptionList {...props} />);

    const listItems = screen.queryAllByText(/Item/i);

    expect(listItems.length).toBe(0);
  });
});
