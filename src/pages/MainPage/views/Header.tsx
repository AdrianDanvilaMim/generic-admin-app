import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../hooks/hooks.ts";
import {userExit} from "../../../reducers/userSlice.tsx";
import {Navigation} from "./Navigation.tsx";
import {useState} from "react";
import {PATHS} from "../../../router/constants.ts";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const [isVisible, setisVisible] = useState(false)

  const exitClickHandler = () => {
    dispatch(userExit())
    navigate("/")
    console.log("hola")
  }

  const displayClickHandler = () => {
    setisVisible(!isVisible)
  }
  return (
    <header className={"h-fit w-full sticky top-0 z-50 bg-white"}>
      <div className={"space-x-0 flex flex-row justify-eve space-ah-10 border-b-2"}>
        <div className={"w-2/12 flex items-center justify-center sm:hidden"} onClick={displayClickHandler}>
          <p className={"icon-paragraph-justify"}></p>
        </div>

        <div
          className={"mx-2 text-black w-10/12 md:w-5/12 lg:w-7/12 xl:w-8/12 2xl:w-8/12 flex flex-row ml-10 border-r-2"}>
          <input type={"text"} placeholder={"hola"} className={"h-full w-11/12 focus:outline-none"}/>
          <button className={"m-3"}>buscar</button>
        </div>
        <div
          className={"pr-2  py-5 w-4/12 md:w-7/12 lg:w-5/12 xl:w-4/12 2xl:w-4/12   flex flex-row justify-center md:justify-evenly items-center"}>
          <div className={"text-black hidden w-1/2 md:flex flex-row justify-around"}>
            <div className={" flex items-center pointer-events-auto hover:cursor-pointer"}
                 onClick={exitClickHandler}>
              <p className={"m-2 icon-arrow-left"}></p>logout
            </div>
            <div className={""}><Link to={PATHS.profile} className={'flex items-center '}><p
              className={"m-2 icon-user"}></p>Profile</Link>
            </div>
          </div>
          <details className={"ease-in-out  md:hidden decoration-none sticky flex items-center"}>
            <summary className={"flex w-full justify-center"}>
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-black" alt=""/>
            </summary>

            <div className={" flex  w-full items-center pointer-events-auto hover:cursor-pointer"}
                 onClick={exitClickHandler}>
              <p className={"m-2 icon-arrow-left"}></p>logout
            </div>
            <div className={""}><Link to={PATHS.profile} className={'flex items-center '}><p
              className={"m-2 icon-user"}></p>Profile</Link>
            </div>

          </details>
          <img className="md:inline-block h-10 w-10 rounded-full ring-2 ring-black hidden" alt=""/>


        </div>
      </div>


      <Navigation 
        className={`transition-transform ease-in-out delay-150  bg-primary-1 ${isVisible ? "visible " : "hidden"}  sm:hidden w-full sm:w-fit md:w-2/12  h-fit sm:h-screen  sticky top-0  text-scarWhite-1 border-b-primary-2 `}></Navigation>

    </header>
  )
}