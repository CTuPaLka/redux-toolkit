import { IRecipe, IRecipeData } from "../../types/recipe.types";
import { api } from "./api";
//  этот способ выноса endpoints используется при большом приложении
export const recipeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // первый тип в mutation null потому что нам ничего не приходит в ответе, а вторым типом мы описываем взодящий аргумент
    createNewRecipe: builder.mutation<null, IRecipeData>({
      query: (recipe) => ({
        body: recipe,
        url: "/",
        method: "POST",
      }),
      invalidatesTags: () => [
        {
          type: "Recipe",
        },
      ],
    }),
    deleteRecipe: builder.mutation<null, IRecipe>({
      query: (recipe) => ({
        body: recipe,
        url: `/${recipe.id}`,
        method: "DELETE",
      }),
      invalidatesTags: () => [
        {
          type: "Recipe",
        },
      ],
    }),
    updateRecipe: builder.mutation<null, IRecipe>({
      query: (recipe) => ({
        body: recipe,
        url: `/${recipe.id}`,
        method: "PUT",
      }),
      invalidatesTags: () => [
        {
          type: "Recipe",
        },
      ],
    }),
  }),
});

export const {
  useCreateNewRecipeMutation,
  useDeleteRecipeMutation,
  useUpdateRecipeMutation,
} = recipeApi;
