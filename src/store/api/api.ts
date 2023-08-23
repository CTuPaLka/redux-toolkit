import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IRecipe } from '../../types/recipe.types'

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
	// !сначала перенесли все эндпоинты, но выдавало ошибку. поэтому вернули один эндпоинт и все заработало
	endpoints: builder =>({
		// В Query ничго не прокидывается, поэтому вторым параметром в описании типа будет null
		getRecipes: builder.query<IRecipe[], null>({
			// запрос снизу позволяет новые рецепты прокидывать наверх. Работает по принципу, что новый рецепт = значит более свежий id . Грубо говоря, самый первый рецепт внизу, а самый новый вверху
			query: ()=>'/?_sort=id&_order=desc',
			// следующим кодом мы запровайдим тег , который будет привязан к этому запросу
			providesTags: ()=>[{
				type: 'Recipe'
			}]
		})
	})
})

export const { useGetRecipesQuery } = api