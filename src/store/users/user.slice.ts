import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { getUsersById } from './user.actions'
import { IInitialUserState, IUser } from '../../types/user.types'

const initialState: IInitialUserState = {
	isLoading: false,
	error: null,
	users: {} as IUser,
}

export const userSlice = createSlice({
	name: 'users',
	initialState: initialState, 
	reducers: {},
	extraReducers: builder=> {
	builder
	.addCase(getUsersById.pending, state=> {
		state.isLoading = true
	})
	.addCase(getUsersById.fulfilled, (state, action: PayloadAction<IUser>)=> {
		state.isLoading = false,
		state.users = action.payload
	})
	// так как в следующем коде нам приходит ошибка, которую сложно типизировать, мы типизируем action как динамический тип (any)
	.addCase(getUsersById.rejected, (state, action: any)=> {
		state.isLoading = false,
		state.error = action.payload.error,
		state.users = {} as IUser
	})
} })