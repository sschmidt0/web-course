import { describe, it, expect, vi } from "vitest";
import { toast } from "nextjs-toast-notify";
import { handleShowToast } from "./handle-show-toast";

vi.mock("nextjs-toast-notify", () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn(),
  },
}));

describe("handleShowToast", () => {
  it("calls toast.error with correct parameters when type is error", () => {
    const message = "This is an error message";
    handleShowToast("error", message);

    expect(toast.error).toHaveBeenCalledWith(message, {
      duration: 3000,
      progress: true,
      position: "top-right",
      transition: "fadeIn",
    });
  });

  it("calls toast.success with correct parameters when type is success", () => {
    const message = "This is a success message";
    handleShowToast("success", message);

    expect(toast.success).toHaveBeenCalledWith(message, {
      duration: 3000,
      progress: true,
      position: "top-right",
      transition: "fadeIn",
    });
  });
});
