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

  // it("applies secondary class when secondary prop is true", () => {
  //   props.secondary = true;
  //   const { container } = render(<Button {...props} />);
  //   screen.debug();
  //   expect(container.getAttributeNames().length).toBe(1);
  // });
});
