import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const API_URL = 'http://localhost:4200/recipes'
/**
 * создали общий апи
 * tagTypes: ['Recipe'] - для того, чтобы переобновлять по этому тегу
 * baseQuery - для базового запроса
 * endpoints - 1 эндпоинт это запрос определенного типа на сервер
 */
export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Recipe'],
	baseQuery: fetchBaseQuery({
		// желательно вынести в отдельный файл
		baseUrl: API_URL,
	}),
	// !можно оставить и без выноса в отдельный файл эндпоинтов, но в большом приложении надо выносить
	// endpoints: builder =>({
	// 	getRecipes: builder.query({
	// 		query: ()=>'/',
	// 	}),
	// 	createNewRecipe: builder.mutation({
	// 		query: (recipe)=>({
	// 			body: recipe,
	// 			url: '/',
	// 			method: 'POST',
	// 		}),
	// 	})
	// })
	endpoints: builder =>({
		getRecipes: builder.query({
			query: ()=>'/',
		})
	})
})

export const { useGetRecipesQuery } = api