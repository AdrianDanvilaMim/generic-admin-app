import './App.css'

import {RouterProvider} from "react-router-dom";
import {useAppSelector} from "./hooks/hooks.ts";
import {getRouter} from "./router/router.tsx";


function App() {
  const state = useAppSelector((state) => state.user.user)
  console.log(state)

  return (
    <RouterProvider router={getRouter()}/>
  );

}

export default App;