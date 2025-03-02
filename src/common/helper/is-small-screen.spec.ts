import { describe, it, expect, vi } from "vitest";
import { isSmallScreen } from "./is-small-screen";

describe("isSmallScreen", () => {
  it("returns true when window width is less than 480", () => {
    vi.spyOn(window, "innerWidth", "get").mockReturnValue(479);
    expect(isSmallScreen()).toBe(true);
  });

  it("returns false when window width is 480 or greater", () => {
    vi.spyOn(window, "innerWidth", "get").mockReturnValue(480);
    expect(isSmallScreen()).toBe(false);

    vi.spyOn(window, "innerWidth", "get").mockReturnValue(481);
    expect(isSmallScreen()).toBe(false);
  });
});
