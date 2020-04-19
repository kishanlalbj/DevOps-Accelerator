import { AUTH_TYPES } from "./auth.types";

export const setCurrentUser = user => ({
  type: AUTH_TYPES.SET_CURRENT_USER,
  payload: user
});

export const getCurrentUser = () => ({
  type: AUTH_TYPES.GET_USER
});
