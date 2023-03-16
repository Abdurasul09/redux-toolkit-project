import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	name: '',
	email: '',
	password: ''
}

export const registerSlice = createSlice({
	name: 'register',
	initialState,
	reducers: {
		registerUserStart: state => {
      state.isLoading = true
		}
	}
})

export const {registerUserStart} = registerSlice.actions
export default registerSlice.reducer