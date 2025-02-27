import {
  FORGET_PASS_PENDING,
  FORGET_PASS_REJECTED,
  FORGET_PASS_SUCCESS,
  LOGIN_PENDING,
  LOGIN_REJECTED,
  LOGIN_SUCCESS,
  RESET_AUTH_STATE,
} from "../actions/types/authType";

const initialState = {
  isLoading: false,
  accessToken: null,
  error: null,
  flag: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_PENDING:
    case FORGET_PASS_PENDING:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, accessToken: payload };
    case FORGET_PASS_SUCCESS:
      return { ...state, isLoading: false, flag: true };

    case RESET_AUTH_STATE:
      return { ...state, isLoading: false, error: null, flag: false };
    case LOGIN_REJECTED:
    case FORGET_PASS_REJECTED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};

export default authReducer;
