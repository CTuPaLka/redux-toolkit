// import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import css from './Recipe.module.css'
import {actions} from '../store/favorites/favorites.slice' 

const RecipeItem = ({recipe}) => {
  const favorites = useSelector(state=> state.favorites);
  const dispatch = useDispatch()
console.log(favorites);

// need to check condition exist
const isExist = favorites.some(r=>r.id === recipe.id)

  return (
    <div className={css.item}>
      <h2>{recipe.name}</h2>
      <button onClick={()=>dispatch(actions.toggleFavorites(recipe))}>{
        isExist ? 'Remove from' : 'Add to'
      } favorites</button>
    </div>
  );
};

export default RecipeItem;
