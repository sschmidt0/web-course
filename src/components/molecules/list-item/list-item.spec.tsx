import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { ListItem, ListItemProps } from "./list-item";

describe("ListItem", () => {
  let props: ListItemProps;

  beforeEach(() => {
    props = {
      title: "Sample Title",
      content: ["Item 1", "Item 2", "Item 3"],
    };
  });

  it("renders correctly with given title and content", () => {
    render(<ListItem {...props} />);

    const titleElement = screen.getByText(props.title);
    const item1Element = screen.getByText("Item 1");
    const item2Element = screen.getByText("Item 2");
    const item3Element = screen.getByText("Item 3");

    expect(titleElement).toBeInTheDocument();
    expect(item1Element).toBeInTheDocument();
    expect(item2Element).toBeInTheDocument();
    expect(item3Element).toBeInTheDocument();
  });

  it("renders an empty list when content is empty", () => {
    props.content = [];

    render(<ListItem {...props} />);

    const titleElement = screen.getByText(props.title);
    const listItems = screen.queryAllByText(/Item/i);

    expect(titleElement).toBeInTheDocument();
    expect(listItems.length).toBe(0);
  });
});
