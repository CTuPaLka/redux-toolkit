import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

//! типизация кастомного хука была нужна для автозаполнение IDE (подсказки по коду)
// useTypedSelector(store=> store.)