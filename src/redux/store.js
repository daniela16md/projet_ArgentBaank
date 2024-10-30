import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/authReducer';
import userReducer from './reducer/userReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true
});
  
export default store;
