import { IRecipe } from "../../types/recipe.types";
import { api } from "./api";
//  этот способ выноса endpoints используется при большом приложении
export const recipeApi = api.injectEndpoints({
	endpoints: builder =>({
		getRecipes: builder.query<IRecipe[], null>({
			query: ()=>'/',
		}),
		// первый тип в mutation null потому что нам ничего не приходит в ответе, а вторым типом мы описываем взодящий аргумент
		createNewRecipe: builder.mutation<null, IRecipe[]>({
			query: (recipe)=>({
				body: recipe,
				url: '/',
				method: 'POST',
			}),
			invalidatesTags:()=>[{
				type: "Recipe",
			}]
		})
	})
})

export const {useCreateNewRecipeMutation} = recipeApi
