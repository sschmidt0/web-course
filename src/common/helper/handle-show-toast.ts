import { toast } from "nextjs-toast-notify";

export const handleShowToast = (type: "success" | "error", message: string) => {
  if (type === "error") {
    toast.error(message, {
      duration: 3000,
      progress: true,
      position: "top-right",
      transition: "fadeIn",
    });
  }

  if (type === "success") {
    toast.success(message, {
      duration: 3000,
      progress: true,
      position: "top-right",
      transition: "fadeIn",
    });
  }
};
