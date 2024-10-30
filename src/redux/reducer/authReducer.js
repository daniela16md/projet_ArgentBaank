import { GET_USERPROFILE, UPDATE_USERNAME, LOGIN_SUCCESS, LOGOUT } from "../action/actionstypes";

const initialState = {
  status: "init",
  isConnected: false,
  token: null,
  userData: {},
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERPROFILE:
      return {
        ...state,
        userData: action.payload,
      };
    case UPDATE_USERNAME:
      return {
        ...state,
        userData: {
          ...state.userData,
          userName: action.payload,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isConnected: true,
        token: action.payload.token, 
        userData: action.payload.userData, 
      };
    case LOGOUT:
      return {
        ...initialState, 
      };
    default:
      return state;
  }
};

export default authReducer;