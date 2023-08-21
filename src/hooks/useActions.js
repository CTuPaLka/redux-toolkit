import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../store/favorites/favorites.slice";
// !импорт ниже не работает, так как эти actions асинронные и не в reducers, а в extraReducers
// import { userSlice } from "../store/users/user.slice";
import * as userActions from '../store/users/user.actions'

// делаем так, когда много actions, чтобы прокинуть все actions, которые есть в bindActionCreators()
// В ИДЕАЛЕ ВЫНЕСТИ В ОТДЕЛЬНЫЙ ФАЙЛ
const rootActions = {
  ...actions,
//   можно сделать експорт непосредственно из файла ...slice.js либо достать уже здесь actions
  ...userActions,
};

// ВСЕГДА в своих хуках использовыать в названии use... Это дает понять реакту, что это хук и позволяет изпользовать эту функцию без проблем внутри компонент
export const useActions = () => {
  const dispatch = useDispatch();

//   useMemo позволяет не изменять ссылку функции при перерисовке пока dispatch не изменился
  return useMemo(() => {
    return bindActionCreators(rootActions, dispatch);
  }, [dispatch]);
};
