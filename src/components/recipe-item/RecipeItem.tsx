// import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import css from "./Recipe.module.css";
import { actions } from "../../store/favorites/favorites.slice";
import { useActions } from "../../hooks/useActions";
import { useFavorites } from "../../hooks/useFavorites";
import { IRecipe } from "../../types/recipe.types";
import {
  useDeleteRecipeMutation,
  useUpdateRecipeMutation,
} from "../../store/api/recipe.api";

interface IRecipeItem {
  recipe: IRecipe;
  updateRecipe: (recipe: IRecipe) => void;
  deleteRecipe: (recipe: IRecipe) => void;
}

const RecipeItem = ({ recipe, updateRecipe, deleteRecipe }: IRecipeItem) => {
  const favorites = useFavorites();

  // нам dispatch теперь не нужен из за создания кастомного хука useActions
  // const dispatch = useDispatch()

  const { toggleFavorites } = useActions();

  const localToggleFavorites = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    toggleFavorites(recipe);
  };

  const localDeleteRecipe = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    deleteRecipe(recipe);
  };

  const localUpdateRecipe = () => {
	  console.log(recipe);
    const name = prompt() || "";
    updateRecipe({...recipe, name});
  };

  console.log(favorites);

  // need to check condition exist
  const isExist = favorites.some((r) => r.id === recipe.id);

  return (
    <div className={css.item} onClick={() => localUpdateRecipe()}>
      <img src={recipe.image} alt={recipe.image} width={100} />
      <h2>{recipe.name}</h2>
      <button onClick={(e) => localToggleFavorites(e)}>
        {isExist ? "Remove from" : "Add to"} favorites
      </button>
      <button onClick={(e) => localDeleteRecipe(e)}>Remove Recipe</button>
    </div>
  );
};

export default RecipeItem;
