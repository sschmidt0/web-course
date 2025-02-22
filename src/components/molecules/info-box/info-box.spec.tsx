import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { InfoBox } from "./info-box";

describe("InfoBox", () => {
  it("renders correctly with given props", () => {
    const props = {
      icon: <span>Icon</span>,
      text: "Sample Text",
      title: "Sample Title",
      children: <div>Child Content</div>,
    };

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
    const props = {
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
