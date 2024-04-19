import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
// eslint-disable-next-line react-hooks/rules-of-hooks
export const useAppSelector = useSelector((state: RootState) => state)

