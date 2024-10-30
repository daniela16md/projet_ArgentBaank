import axios from 'axios';

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";
export const GET_USERPROFILE = "GET_USERPROFILE";
export const UPDATE_USERNAME = "UPDATE_USERNAME";

const API_URL = "http://localhost:3001/api/v1/user";


export const userProfile = (userData) => (dispatch) => {
	dispatch({
		type: GET_USERPROFILE,
		payload: userData
	});
	console.log("User Profile Updated:", userData);
};

export const updateUserName = (userName) => (dispatch) => {
	dispatch({
		type: UPDATE_USERNAME,
		payload: userName
	});
	console.log("Username Updated:", userName);
};

export const loginSuccess = (token, userData) => {
	return {
		type: LOGIN_SUCCESS,
		payload: {
			token, 
			userData
		}
	};
};

export const loginError = (error) => {
	return {
		type: LOGIN_ERROR,
		payload: error, 
		     
	};
};

export const logout = () => {
	localStorage.removeItem('token'); 
	return {
		type: LOGOUT
	};
};

// API Calls
export const loginUser = (credentials) => async (dispatch) => {
	try {
		const response = await axios.post(`${API_URL}/login`, credentials);
		const token = response.data.body.token;
		const userData = response.data.body.userData;
		localStorage.setItem('token', token); 
		dispatch(loginSuccess(token, userData));
		console.log("Login Successful:", token);
    
	} catch (error) {
		dispatch(loginError(error.response.data.message));
		console.error("Login Error:", error.response.data.message);
        return error.response.data.message;
	}
};

export const signupUser = (userData) => async (dispatch) => {
	try {
		const response = await axios.post(`${API_URL}/signup`, userData);
		console.log("Signup Successful:", response.data);
		
	} catch (error) {
		console.error("Signup Error:", error.response.data.message);
	}
};

export const fetchUserProfile = () => async (dispatch) => {
	const token = localStorage.getItem('token'); 
	try {
		const response = await axios.get(`${API_URL}/profile`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		dispatch(userProfile(response.data.body));
		console.log("Fetched User Profile:", response.data);
	} catch (error) {
		console.error("Fetch User Profile Error:", error.response.data.message);
	}
};

export const updateProfile = (profileData) => async (dispatch) => {
	const token = localStorage.getItem('token'); 
	try {
		const response = await axios.put(`${API_URL}/profile`, profileData, {
			headers: { Authorization: `Bearer ${token}` }
		});
		dispatch(updateUserName(response.data.body));
		console.log("Profile Updated:", response.data);
	} catch (error) {
		console.error("Update Profile Error:", error.response.data.message);
	}
};