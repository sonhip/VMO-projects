import * as types from "./types";

export const loginSuccess = (login) => ({
  type: types.LOGIN_SUCCESS,
  login,
});

export const loginFail = (login) => ({
  type: types.LOGIN_FAIL,
  login,
});
