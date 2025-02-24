import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Input, InputProps } from "./input";

describe("Input", () => {
  let props: InputProps;

  beforeEach(() => {
    props = {
      label: "Name",
      placeholder: "Enter your name",
      value: "",
      onChange: vi.fn(),
    };
  });

  it("renders correctly with given props", () => {
    render(<Input {...props} />);

    const labelElement = screen.getByText(props.label);
    const inputElement = screen.getByPlaceholderText(props.placeholder);

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(props.value);
  });

  it("calls onChange function when input value changes", () => {
    render(<Input {...props} />);

    const inputElement = screen.getByPlaceholderText(props.placeholder);
    fireEvent.change(inputElement, { target: { value: "Jane Doe" } });

    expect(props.onChange).toHaveBeenCalledWith("Jane Doe");
  });
});
