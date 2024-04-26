import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// eslint-disable-next-line react-hooks/rules-of-hooks
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useFetch = async (url: string | URL | Request) => {
  const response = await fetch(url, {
    method: "GET",
  })
  return await response.json()
}

