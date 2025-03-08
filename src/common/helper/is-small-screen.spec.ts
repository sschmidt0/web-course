import { describe, it, expect, vi } from "vitest";
import { isSmallScreen } from "./is-small-screen";

describe("isSmallScreen", () => {
  it("returns true when window width is less than 555", () => {
    vi.spyOn(window, "innerWidth", "get").mockReturnValue(554);
    expect(isSmallScreen()).toBe(true);
  });

  it("returns false when window width is 555 or greater", () => {
    vi.spyOn(window, "innerWidth", "get").mockReturnValue(555);
    expect(isSmallScreen()).toBe(false);

    vi.spyOn(window, "innerWidth", "get").mockReturnValue(556);
    expect(isSmallScreen()).toBe(false);
  });
});
