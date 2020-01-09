import { combineReducers } from "redux";
import { ActionType } from "./sessionActions";

const user = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCSES:
    case ActionType.SIGNUP_SUCCSES:
      return payload.response.user;

    case ActionType.REFRESH_USER_SUCCSES:
      return payload.user;

    case ActionType.LOGOUT:
      return null;

    default:
      return state;
  }
};

const authenticated = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCSES:
    case ActionType.SIGNUP_SUCCSES:
    case ActionType.REFRESH_USER_SUCCSES:
      return true;

    case ActionType.LOGOUT:
      return false;

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCSES:
    case ActionType.SIGNUP_SUCCSES:
      return payload.response.token;

    case ActionType.LOGOUT:
      return null;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_ERROR:
    case ActionType.SIGNUP_ERROR:
    case ActionType.REFRESH_USER_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({ user, authenticated, token, error });
