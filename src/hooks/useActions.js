import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../store/favorites/favorites.slice";

// делаем так, когда много actions, чтобы прокинуть все actions, которые есть в bindActionCreators()
// В ИДЕАЛЕ ВЫНЕСТИ В ОТДЕЛЬНЫЙ ФАЙЛ
const rootActions = {
  ...actions,
};

// ВСЕГДА в своих хуках использовыать в названии use... Это дает понять реакту, что это хук и позволяет изпользовать эту функцию без проблем внутри компонент
export const useActions = () => {
  const dispatch = useDispatch();

//   useMemo позволяет не изменять ссылку функции при перерисовке пока dispatch не изменился
  return useMemo(() => {
    return bindActionCreators(rootActions, dispatch);
  }, [dispatch]);
};
