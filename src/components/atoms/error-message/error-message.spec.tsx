import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { ErrorMessage, ErrorMessageProps } from "./error-message";

describe("ErrorMessage", () => {
  let props: ErrorMessageProps;

  beforeEach(() => {
    props = {
      message: "This is an error message",
    };
  });

  it("renders correctly with given message", () => {
    render(<ErrorMessage {...props} />);

    const errorMessageElement = screen.getByText(props.message);

    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement).toHaveClass(/error/i);
  });
});
