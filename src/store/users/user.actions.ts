import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../types/user.types";

const fetchUsersById = (userId: number): Promise<IUser> =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ id: 1, name: "Grisha" }), 1000)
  );

export const getUsersById = createAsyncThunk<IUser, number>(
  "users/by-id",
  async (userId, thunkApi) => {
    try {
      const response = await fetchUsersById(userId);
      return response;
    } catch (error) {
      // thunkApi позволяет обратится к состоянию и что угодно с ними сделать
      return thunkApi.rejectWithValue(error);
    }
  }
);
