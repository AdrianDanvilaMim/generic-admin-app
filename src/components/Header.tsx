import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/hooks.ts";
import {userExit} from "../reducers/userSlice.tsx";

export const   Header =()=>{
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const exitClickHandler =()=>{
        dispatch(userExit())
        navigate("/")
        console.log("hola")
    }
    return(
        <header className={"h-1/5 w-full sticky top-0 z-50 bg-white"}>
            <div className={"space-x-0 flex flex-row justify-eve space-ah-10 border-b-2"}>
                <div className={"mx-2 text-black w-10/12 md:w-5/12 lg:w-7/12 xl:w-8/12 2xl:w-8/12 flex flex-row ml-10 border-r-2"}>
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
                        <div className={""}><Link to="/*/profile" className={'flex items-center '}><p
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
                        <div className={""}><Link to="/*/profile" className={'flex items-center '}><p
                            className={"m-2 icon-user"}></p>Profile</Link>
                        </div>

                    </details>
                    <img className="md:inline-block h-10 w-10 rounded-full ring-2 ring-black hidden" alt=""/>


                </div>
            </div>
        </header>
    )
}