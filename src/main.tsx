import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Navigate to={"/login"}/>}></Route>
            <Route path={"/login"} element={<Login></Login>}></Route>
            <Route path={"/logout"} element={<div>logOut</div>}></Route>
            <Route path={"/*"} element={<App/>}></Route>
        </Routes>
    </BrowserRouter>
)
