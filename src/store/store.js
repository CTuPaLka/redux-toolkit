import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as favoritesReducer } from './favorites/favorites.slice'
import { userSlice } from './users/user.slice';
import { api } from './api/api';

const reducers = combineReducers({
  favorites: favoritesReducer,
  users: userSlice.reducer,
  [api.reducerPath]: api.reducer
}) 

export const store = configureStore({
  reducer: reducers,
//   devTools- это инструменты разработчика для гугл расширения redux и т.д.
  devTools: true,
  middleware: (getDefaultMiddleware)=>
  getDefaultMiddleware().concat(api.middleware)
})