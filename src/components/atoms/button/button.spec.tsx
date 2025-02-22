import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Button, ButtonProps } from "./button";

describe("Button", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      text: "Click me",
      onClick: vi.fn(),
    };
  });

  it("renders correctly with given text", () => {
    render(<Button {...props} />);
    expect(screen.getByText(props.text)).toBeTruthy();
  });

  it("calls onClick function when clicked", () => {
    render(<Button {...props} />);
    fireEvent.click(screen.getByText(props.text));
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
