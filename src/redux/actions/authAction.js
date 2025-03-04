import { keyLocalStorage } from "../../constants/keyConstant";
import axiosInstance from "../../libs/axiosInterceptor";
import handleAsyncAction from "../../utils/handleAsyncAction";
import { saveToLocalStorage } from "../../utils/localStorage";
import { showSuccessToast } from "../../utils/toastNotifications";
import {
  FORGET_PASS_PENDING,
  FORGET_PASS_REJECTED,
  FORGET_PASS_SUCCESS,
  LOGIN_PENDING,
  LOGIN_REJECTED,
  LOGIN_SUCCESS,
  REGISTER_PENDING,
  REGISTER_REJECTED,
  REGISTER_SUCCESS,
  RESET_AUTH_STATE,
} from "./types/authType";

//* Reset initialState
export const resetAuthState = () => ({
  type: RESET_AUTH_STATE,
});

//* Handle login
export const loginInitiate = (identify, password) => {
  return handleAsyncAction(
    () => axiosInstance.post("/auth/login", { identify, password }),
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGIN_REJECTED,
    (data) => {
      saveToLocalStorage(keyLocalStorage.accessToken, data.accessToken);
      showSuccessToast("Login successfully!");
      window.location.href = "/";
    }
  );
};

//* Handle Register
export const registerInitiate = (email, password) => {
  return handleAsyncAction(
    () =>
      axiosInstance.post("/auth/register", {
        email,
        password,
      }),
    REGISTER_PENDING,
    REGISTER_SUCCESS,
    REGISTER_REJECTED,
    (_) => {
      showSuccessToast("Account created successfully!");
      window.location.href = "/auth/login";
    }
  );
};

//* Handle forget password
export const forgetInitiate = (email) => {
  return handleAsyncAction(
    () => axiosInstance.post("/auth/forgot-password", { email }),
    FORGET_PASS_PENDING,
    FORGET_PASS_SUCCESS,
    FORGET_PASS_REJECTED,
    () => {
      showSuccessToast("Please, new password sent to your email!");
    }
  );
};
