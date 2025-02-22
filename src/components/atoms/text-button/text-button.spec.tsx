import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { TextButton, TextButtonProps } from "./text-button";

describe("Text Button", () => {
  let props: TextButtonProps;

  beforeEach(() => {
    props = {
      text: "Click me",
      onClick: vi.fn(),
    };
  });

  it("renders correctly with given text", () => {
    render(<TextButton {...props} />);
    expect(screen.getByText(props.text)).toBeTruthy();
  });

  it("calls onClick function when clicked", () => {
    render(<TextButton {...props} />);
    fireEvent.click(screen.getByText(props.text));
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
