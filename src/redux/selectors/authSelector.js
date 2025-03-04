import { createSelector } from "reselect";

const authState = (state) => state.auth;

export const selectIsLoading = createSelector(
  authState,
  (auth) => auth.isLoading
);
export const selectAccessToken = createSelector(
  authState,
  (auth) => auth.accessToken
);
export const selectError = createSelector(authState, (auth) => auth.error);
export const selectFlag = createSelector(authState, (auth) => auth.flag);
