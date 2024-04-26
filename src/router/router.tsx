import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from "react-router-dom";
import {Login} from "../pages/Login.tsx";
import {Register} from "../pages/Register.tsx";
import {MainPage} from "./layout/MainPage.tsx";
import {Dashboard} from "../pages/MainPage/views/Dashboard.tsx";
import {Profile} from "../pages/MainPage/views/Profile.tsx";
import {Tasks} from "../pages/MainPage/views/Tasks/Tasks.tsx";
import {PATHS} from "./constants.ts";


export const getRouter = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path={"/"} element={<Navigate to={PATHS.login}/>}></Route>
        <Route path={PATHS.login} element={<Login></Login>}></Route>
        <Route path={PATHS.register} element={<Register></Register>}></Route>

        <Route Component={MainPage}>
          <Route path={PATHS.dashboard} element={<Dashboard></Dashboard>}></Route>
          <Route path={PATHS.profile} element={<Profile></Profile>}></Route>
          <Route path={PATHS.tasks} element={<Tasks></Tasks>}></Route>
        </Route>
      </Route>
    )
  )
