import { AUTH_TYPES } from "./auth.types";

const INITIAL_STATE = {
  isAuthenticated: false,
  currentUser: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_TYPES.GET_USER:
      return {
        ...state
      };
    case AUTH_TYPES.SET_CURRENT_USER:
      console.log("Hello", action.payload);
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true
      };
    default:
      return state;
  }
};

export default authReducer;
