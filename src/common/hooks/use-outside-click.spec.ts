import { describe, it, expect, vi } from "vitest";
import { useOutsideClick } from "./use-outside-click";
import { renderHook } from "@testing-library/react";

describe("useOutsideClick", () => {
  it("calls callback when clicking outside the element", () => {
    const callback = vi.fn();
    const ref = { current: document.createElement("div") };
    document.body.appendChild(ref.current);

    renderHook(() => useOutsideClick(ref, callback, true));

    document.body.click();

    expect(callback).toHaveBeenCalledTimes(1);

    document.body.removeChild(ref.current);
  });

  it("does not call callback when clicking inside the element", () => {
    const callback = vi.fn();
    const ref = { current: document.createElement("div") };
    document.body.appendChild(ref.current);

    renderHook(() => useOutsideClick(ref, callback, true));

    ref.current.click();

    expect(callback).not.toHaveBeenCalled();

    document.body.removeChild(ref.current);
  });

  it("does not call callback when isActive is false", () => {
    const callback = vi.fn();
    const ref = { current: document.createElement("div") };
    document.body.appendChild(ref.current);

    renderHook(() => useOutsideClick(ref, callback, false));

    document.body.click();

    expect(callback).not.toHaveBeenCalled();

    document.body.removeChild(ref.current);
  });
});
