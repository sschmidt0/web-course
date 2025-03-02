import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MenuButton, MenuButtonProps } from "./menu-button";

describe("Menu Button", () => {
  let props: MenuButtonProps;

  beforeEach(() => {
    props = {
      icon: <div>icon</div>,
      onClick: vi.fn(),
    };
  });

  it("renders correctly with given text", () => {
    render(<MenuButton {...props} />);
    expect(screen.getByText(/icon/i)).toBeTruthy();
  });

  it("calls onClick function when clicked", () => {
    render(<MenuButton {...props} />);
    fireEvent.click(screen.getByText(/icon/i));
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
