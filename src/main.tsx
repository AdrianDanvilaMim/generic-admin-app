import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from './pages/Login.tsx';
import { Register } from "./pages/Register.tsx";
import { Provider } from 'react-redux';
import { store } from './store.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store} >
        <BrowserRouter>
            <Routes >
                <Route path={"/"} element={<Navigate to={"/login"} />}></Route>
                <Route path={"/login"} element={<Login></Login>}></Route>
                <Route path={"/register"} element={<Register></Register>}></Route>
                <Route path={"/*"} element={<App />}></Route>
            </Routes>
        </BrowserRouter>
    </Provider>

)
