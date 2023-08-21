import {createAsyncThunk} from '@reduxjs/toolkit'


const fetchUsersById = ( userId)=>
new Promise((resolve) => 
	setTimeout(()=> resolve({id: 1, name: 'Grisha'}),1000)
)


export const getUsersById = createAsyncThunk('users/by-id',
async(userId, thunkApi)=>{
try {
	const response = await fetchUsersById(userId)
	return response
} catch (error) {
	// thunkApi позволяет обратится к состоянию и что угодно с ними сделать
	thunkApi.rejectWithValue(error)
}
})

