import {
  FORGET_PASS_PENDING,
  FORGET_PASS_REJECTED,
  FORGET_PASS_SUCCESS,
  LOGIN_PENDING,
  LOGIN_REJECTED,
  LOGIN_SUCCESS,
  REGISTER_PENDING,
  RESET_AUTH_STATE,
} from "../actions/types/authType";

const initialState = {
  isLoading: false,
  accessToken: null,
  error: null,
  flag: false,
};

//* Way 2
const authReducer = (state = initialState, action) => {
  const authHandlers = {
    // Pending
    [LOGIN_PENDING]: () => ({ ...state, isLoading: true }),
    [FORGET_PASS_PENDING]: () => ({ ...state, isLoading: true }),
    [REGISTER_PENDING]: () => ({ ...state, isLoading: true }),

    // Success
    [LOGIN_SUCCESS]: () => ({
      ...state,
      isLoading: false,
      accessToken: action.payload,
    }),
    [FORGET_PASS_SUCCESS]: () => ({ ...state, isLoading: false, flag: true }),

    // Reset
    [RESET_AUTH_STATE]: () => ({
      ...state,
      isLoading: false,
      error: null,
      flag: false,
    }),

    // Rejected
    [LOGIN_REJECTED]: () => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    [FORGET_PASS_REJECTED]: () => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
  };

  return authHandlers[action.type] ? authHandlers[action.type]() : state;
};

export default authReducer;
