import { SIGNUP, LOGIN, LOGOUT } from "../actions/auth.action";

const INITIAL_STATE = {
  token: null,
  userId: null,
  email: null,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        email: action.email,
      };
    case LOGIN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        email: action.email,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        email: null,
        name: null
      };
    default:
      return state;
  }
};

export default AuthReducer;
