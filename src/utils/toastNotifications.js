import { Bounce, toast } from "react-toastify";

const toastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: false,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: "light",
  transition: Bounce,
};

export const showSuccessToast = (message) => {
  toast.success(message, toastOptions);
};

export const showErrorToast = (message) => {
  toast.error(message, toastOptions);
};

export const showWarningToast = (message) => {
  toast.warn(message, toastOptions);
};

export const showCustomToast = (message, options) => {
  toast(message, { ...toastOptions, ...options });
};
