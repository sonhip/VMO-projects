import * as types from "../actions/types";

const initialState = {
  login: false,
};
const loginReducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state)); ///deep copy object

  switch (action.type) {
    case types.LOGIN_SUCCESS:
      newState.login = action.login;
      break;
    case types.LOGIN_FAIL:
      newState.login = action.login;
      break;
    default:
      break;
  }
  return newState;
};

export default loginReducer;
