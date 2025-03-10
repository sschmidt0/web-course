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
      item: {
        id: 1,
        text: "Sample Text",
        years: "2025",
      },
    };
  });

  it("renders correctly with given props", () => {
    render(<UnderlineListItem {...props} />);

    const textElement = screen.getByText(props.item.text);
    const yearsElement = screen.getByText(props.item.years);

    expect(textElement).toBeInTheDocument();
    expect(yearsElement).toBeInTheDocument();
  });
});
