import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./../slice/auth";
import RegisterReducer from './../slice/register'


export default configureStore({
  reducer: {
    auth: AuthReducer,
		register: RegisterReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});
