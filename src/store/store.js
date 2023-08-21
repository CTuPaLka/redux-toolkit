import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as favoritesReducer } from './favorites/favorites.slice'
import { userSlice } from './users/user.slice';

const reducers = combineReducers({
  favorites: favoritesReducer,
  users: userSlice.reducer,
}) 

export const store = configureStore({
  reducer: reducers,
//   devTools- это инструменты разработчика для гугл расширения redux и т.д.
  devTools: true,
})