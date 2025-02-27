import { keyLocalStorage } from "../../constants/keyConstant";
import axiosInstance from "../../libs/axiosInterceptor";
import { saveToLocalStorage } from "../../utils/localStorage";
import {
  showErrorToast,
  showSuccessToast,
} from "../../utils/toastNotifications";
import {
  FORGET_PASS_PENDING,
  FORGET_PASS_REJECTED,
  FORGET_PASS_SUCCESS,
  LOGIN_PENDING,
  LOGIN_REJECTED,
  LOGIN_SUCCESS,
  RESET_AUTH_STATE,
} from "./types/authType";

//* 1. Login
const loginPending = () => ({
  type: LOGIN_PENDING,
});

const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

const loginRejected = (error) => ({
  type: LOGIN_REJECTED,
  payload: error,
});

//* Forget
const forgetPending = () => ({
  type: FORGET_PASS_PENDING,
});

const forgetSuccess = (payload) => ({
  type: FORGET_PASS_SUCCESS,
  payload,
});

const forgetRejected = (error) => ({
  type: FORGET_PASS_REJECTED,
  payload: error,
});

//* Reset initialState
export const resetAuthState = () => ({
  type: RESET_AUTH_STATE,
});

//* Handle login
export const loginInitiate = (identify, password) => {
  return (dispatch) => {
    dispatch(loginPending());

    axiosInstance
      .post("/auth/login", {
        identify,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          saveToLocalStorage(
            keyLocalStorage.accessToken,
            response.data.accessToken
          );

          dispatch(loginSuccess(response.data.accessToken));
          window.location.href = "/";
          return showSuccessToast("Login successfully!");
        }
      })
      .catch((error) => {
        dispatch(loginRejected(error?.response?.data?.message));
        return showErrorToast(error?.response?.data?.message);
      });
  };
};

//* Handle forget password
export const forgetInitiate = (email) => {
  return (dispatch) => {
    dispatch(forgetPending());

    axiosInstance
      .post("/auth/forgot-password", {
        email,
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(forgetSuccess(response.data));
          return showSuccessToast("Please, new password sent to your email!");
        }
      })
      .catch((error) => {
        dispatch(forgetRejected(error?.response?.data?.message));
        return showErrorToast(error.response.data.message);
      });
  };
};
