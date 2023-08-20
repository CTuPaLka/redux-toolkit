import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload }) => {
      // в качекстве action.payload передавать будем избранный рецепт
      const recipe = payload;
      const isExist = state.some((r) => r.id === recipe.id);
      console.log(state);
      if (isExist) {
        const index = state.findIndex((item) => item.id === recipe.id);
      if(index !== -1){
        state.splice(index, 1)
      }} else state.push(recipe);
    },
    // ! тоже самое, что и ввыше метод, только переменную recipeId сразу обьявили в параметрах метода
    // toggleFavorites: (state, {payload: recipe})=>{

    // }
  },
});

/**
 * экспортируем action и redicers из favoriteSlice которые потом можно использовать в нашем store
 */
export const { actions, reducer } = favoriteSlice;
