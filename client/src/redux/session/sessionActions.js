export const ActionType = {
  LOGIN_REQUEST: "session/LOGIN_REQUEST",
  LOGIN_SUCCSES: "session/LOGIN_SUCCSES",
  LOGIN_ERROR: "session/LOGIN_ERROR",
  SIGNUP_REQUEST: "session/SIGNUP_REQUEST",
  SIGNUP_SUCCSES: "session/SIGNUP_SUCCSES",
  SIGNUP_ERROR: "session/SIGNUP_ERROR",
  LOGOUT: "session/LOGOUT",
  REFRESH_USER_REQUEST: "session/REFRESH_USER_REQUEST",
  REFRESH_USER_SUCCSES: "session/REFRESH_USER_SUCCSES",
  REFRESH_USER_ERROR: "session/REFRESH_USER_ERROR"
};

//refresh
export const refreshUserRequest = () => ({
  type: ActionType.REFRESH_USER_REQUEST
});

export const refreshUserSuccses = user => ({
  type: ActionType.REFRESH_USER_SUCCSES,
  payload: { user }
});

export const refreshUserError = error => ({
  type: ActionType.REFRESH_USER_ERROR,
  payload: { error }
});

// login
export const loginRequest = () => ({ type: ActionType.LOGIN_REQUEST });

export const loginSuccses = response => ({
  type: ActionType.LOGIN_SUCCSES,
  payload: { response }
});

export const loginError = error => ({
  type: ActionType.LOGIN_ERROR,
  payload: { error }
});

//signup
export const signupRequest = () => ({ type: ActionType.SIGNUP_REQUEST });

export const signupSuccses = response => ({
  type: ActionType.SIGNUP_SUCCSES,
  payload: { response }
});

export const signupError = error => ({
  type: ActionType.SIGNUP_ERROR,
  payload: { error }
});

// logOut
export const logOutSuccess = () => ({
  type: ActionType.LOGOUT
});
