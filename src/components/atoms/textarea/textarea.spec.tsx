import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Textarea, TextareaProps } from "./textarea";

describe("Textarea", () => {
  let props: TextareaProps;

  beforeEach(() => {
    props = {
      label: "Message",
      placeholder: "Enter your message",
      value: "",
      onChange: vi.fn(),
    };
  });

  it("renders correctly with given props", () => {
    render(<Textarea {...props} />);

    const labelElement = screen.getByText(props.label);
    const textareaElement = screen.getByPlaceholderText(props.placeholder);

    expect(labelElement).toBeInTheDocument();
    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement).toHaveValue(props.value);
  });

  it("calls onChange function when textarea value changes", () => {
    render(<Textarea {...props} />);

    const textareaElement = screen.getByPlaceholderText(props.placeholder);
    fireEvent.change(textareaElement, { target: { value: "Jane Doe" } });

    expect(props.onChange).toHaveBeenCalledWith("Jane Doe");
  });
});
