import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload }
    default:
      return state
      // throw new Error(`Unhandled type ${type} in userReducer`)
  } 
}


export default userReducer;