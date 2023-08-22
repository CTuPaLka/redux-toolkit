import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as favoritesReducer } from './favorites/favorites.slice'
import { userSlice } from './users/user.slice';
import { api } from './api/api';
import { createLogger } from 'redux-logger';

// прокидываем logger как middleware и благоря ему будем получать результаты 
const logger = createLogger({
	collapsed: true // позволяет получать результат более сжатого формата
})

const reducers = combineReducers({
  favorites: favoritesReducer,
  users: userSlice.reducer,
  [api.reducerPath]: api.reducer
}) 

export const store = configureStore({
  reducer: reducers,
//   devTools- это инструменты разработчика для гугл расширения redux и т.д.
  devTools: true,
//   данный middleware позволяет нам внедрить туда RTK Query. есть библиотека "redux-loger" которая выводит middleware в консоль
  middleware: (getDefaultMiddleware)=>
  getDefaultMiddleware().concat(api.middleware).concat(logger)
})