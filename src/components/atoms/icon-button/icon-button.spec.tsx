import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { IconButton, IconButtonProps } from "./icon-button";

describe("Icon Button", () => {
  let props: IconButtonProps;

  beforeEach(() => {
    props = {
      icon: "Click me",
      onClick: vi.fn(),
    };
  });

  it("renders correctly with given text", () => {
    render(<IconButton {...props} />);
    expect(screen.getByText(props.icon)).toBeTruthy();
  });

  it("calls onClick function when clicked", () => {
    render(<IconButton {...props} />);
    fireEvent.click(screen.getByText(props.icon));
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
