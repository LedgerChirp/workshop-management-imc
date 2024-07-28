import { Toaster, toast } from "react-hot-toast";

const Toast = () => {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      toastOptions={{
        duration: 2000, // AutoClose duration for all toasts
        style: {
          background: "#363636",
          color: "#fff",
        },
        success: {
          style: {
            background: "green",
            color: "#fff",
          },
        },
        error: {
          style: {
            background: "red",
            color: "#fff",
          },
        },
      }}
    />
  );
};

export const notify = (message: any, type = "default") => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "info":
      toast(message, {
        icon: "🤩",
      });
      break;
    default:
      toast(message);
      break;
  }
};

export default Toast;
