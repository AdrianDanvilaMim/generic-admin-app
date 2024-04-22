import {TypedUseSelectorHook, useDispatch, useSelector, useStore} from "react-redux";
import {AppDispatch, RootState} from "../store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// eslint-disable-next-line react-hooks/rules-of-hooks
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

