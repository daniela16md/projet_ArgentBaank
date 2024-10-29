import { combineReducers, configureStore } from '@reduxjs/toolkit';
import auhtReducer from './reducer/authReducer';
import userReducer from './reducer/userReducer';

const rootReducer = combineReducers({
    auth: auhtReducer,
    user: userReducer
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true
});
  
export default store;
