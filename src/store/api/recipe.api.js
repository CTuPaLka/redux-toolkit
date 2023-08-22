import { api } from "./api";
//  этот способ выноса endpoints используется при большом приложении
export const recipeApi = api.injectEndpoints({
	endpoints: builder =>({
		getRecipes: builder.query({
			query: ()=>'/',
		}),
		createNewRecipe: builder.mutation({
			query: (recipe)=>({
				body: recipe,
				url: '/',
				method: 'POST',
			}),
		})
	})
})

export const {useCreateNewRecipeMutation} = recipeApi
