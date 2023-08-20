// import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import css from './Recipe.module.css'
import {actions} from '../../store/favorites/favorites.slice' 
import { useActions } from '../../hooks/useActions';
import { useFavorites } from '../../hooks/useFavorites';

const RecipeItem = ({recipe}) => {
  // для оптимизации вынесем useSelector в отдельтный файл и будем использовать наш кастомный хук
  // const favorites = useSelector(state=> state.favorites);

  const favorites = useFavorites()

  // нам dispatch теперь не нужен из за создания кастомного хука useActions
  // const dispatch = useDispatch()
  const {toggleFavorites} = useActions()

console.log(favorites);

// need to check condition exist
const isExist = favorites.some(r=>r.id === recipe.id)

  return (
    <div className={css.item}>
      <h2>{recipe.name}</h2>
      <button onClick={()=>toggleFavorites(recipe)}>{
        isExist ? 'Remove from' : 'Add to'
      } favorites</button>
    </div>
  );
};

export default RecipeItem;
