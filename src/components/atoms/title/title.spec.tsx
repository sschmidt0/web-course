import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { Title, TitleProps } from "./title";

// filepath: /Users/sarahschmidt/sarah-schmidt-curs-web/src/components/atoms/title/title.test.tsx

describe("Title", () => {
  let props: TitleProps;

  beforeEach(() => {
    props = {
      text: "Hello World",
    };
  });

  it("renders correctly with given text", () => {
    render(<Title {...props} />);
    expect(screen.getByText(props.text)).toBeTruthy();
  });
});
