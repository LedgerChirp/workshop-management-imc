import { Toaster, toast } from "react-hot-toast";

const Toast = () => {
  return (
    <Toaster
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
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
