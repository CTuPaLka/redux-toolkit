import {createSlice} from '@reduxjs/toolkit'
import { getUsersById } from './user.actions'

export const userSlice = createSlice({
	name: 'users',
	initialState: {
		isLoading: false,
		error: null,
		users: {}
	}, 
	reducers: {},
	extraReducers: builder=> {
	builder
	.addCase(getUsersById.pending, state=> {
		state.isLoading = true
	})
	.addCase(getUsersById.fulfilled, (state, action)=> {
		state.isLoading = false,
		state.users = action.payload
	})
	.addCase(getUsersById.rejected, (state, action)=> {
		state.isLoading = false,
		state.error = action.payload.error,
		state.users = {}
	})
} })