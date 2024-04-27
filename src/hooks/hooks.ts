import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store";
import {useCallback, useEffect, useState} from "react";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// eslint-disable-next-line react-hooks/rules-of-hooks
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector



export default function useAsync(callback, dependencies = []) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [value, setValue] = useState()

  const callbackMemoized = useCallback(() => {
    setLoading(true)
    setError(undefined)
    setValue(undefined)
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false))
  }, dependencies)

  useEffect(() => {
    callbackMemoized()
  }, [callbackMemoized])

  return { loading, error, value }
}

const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" },
}

export  function useFetch(url: string | URL | Request, options = {}, dependencies = []) {
  return useAsync(async () => {
    const res = await fetch(url, {...DEFAULT_OPTIONS, ...options});
    if (res.ok) return res.json();
    const json = await res.json();
    return await Promise.reject(json);
  }, dependencies)
}