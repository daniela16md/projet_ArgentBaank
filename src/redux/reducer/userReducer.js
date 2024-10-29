import { GET_USERPROFILE, UPDATE_USERNAME } from "../action/actionstypes";

const initialState = {

	status: "INITIAL",
	userData: {}
};
const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USERPROFILE:
			return {
				...state,
				userData: action.payload
			};
		case UPDATE_USERNAME:
			return {
				...state,
				userData: {
					...state.userData,
					userName: action.payload
				}
			};
		default:
			return state;
	}
};
export default userReducer;