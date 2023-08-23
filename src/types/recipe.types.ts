export interface IRecipe {
	id: number,
	name: string,
	image: string,
}

// расширяем интерфейс IRecipeData от IRecipe исключая элемент id
export interface IRecipeData extends Omit<IRecipe, 'id'>{}