import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { InfoBox, InfoBoxProps } from "./info-box";

describe("InfoBox", () => {
  let props: InfoBoxProps;

  beforeEach(() => {
    props = {
      icon: <span>Icon</span>,
      text: "Sample Text",
      title: "Sample Title",
      children: <div>Child Content</div>,
    };
  });
  it("renders correctly with given props", () => {
    render(<InfoBox {...props} />);

    const iconElement = screen.getByText("Icon");
    const textElement = screen.getByText(props.text);
    const titleElement = screen.getByText(props.title);
    const childElement = screen.getByText("Child Content");

    expect(iconElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(childElement).toBeInTheDocument();
  });

  it("renders correctly without icon and children", () => {
    props = {
      text: "Sample Text",
      title: "Sample Title",
    };

    render(<InfoBox {...props} />);

    const textElement = screen.getByText(props.text);
    const titleElement = screen.getByText(props.title);

    expect(textElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });
});
