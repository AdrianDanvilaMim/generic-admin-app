import {useAppDispatch, useAppSelector} from "../hooks/hooks.ts";
import {userCancelUpdate, userChangeValue, userUpdate} from "../reducers/userSlice.tsx";
import {useState} from "react";
import {Button} from "../components/Button.tsx";



export const Profile = ()=>{
    const inputClassName = "h-12 w-full focus:outline-none focus:bg-primary-1 focus:text-white focus:rounded-2xl border-b-primary-2 border-b-2 transition ease-in-out delay-50 duration-300 invalid:border-pink-500 invalid:text-pink-600\n" +
        "focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
    const dispatch = useAppDispatch()
    const [isDisabled , setIsDisabled ] =useState(true)
    const state =  useAppSelector((state)=>state.user.user)

    const formChangeHandler = (event) => {

        dispatch(userChangeValue({value:event.target.value,typeData:event.target.name}))
    }
    function onClickEditHandler() {
        if (isDisabled){
            setIsDisabled(false)
        }else {
            setIsDisabled(true)

            dispatch(userCancelUpdate())
        }
    }

    function onClickSaveHandler() {
        if (isDisabled){
            setIsDisabled(false)
        }else {
            setIsDisabled(true)

            dispatch(userUpdate())
        }
    }


    return(
        <div className={"w-full p-8 flex h-full justify-center  flex-row"}>
            <div className={` flex w-4/5 h-fit  my-4  flex-col bg-white justify-center rounded-2xl shadow-2xl ${ isDisabled ? "hidden":"visible"}`}>
                <div className={"flex mx-2  flex-row justify-items-start items-center"}>

                    <p className={"text-4xl border-b-2 border-b-primary-2 w-full py-4"}>Hello ,this is your info</p>
                    <div className={'flex-col flex  justify-around  w-3/12 h-20'}>
                        <Button
                            url={"/login"}
                            type={"button"}
                            className={"h-10 bg-white rounded-2xl border-primary-2  w-full transition ease-in-out delay-50 hover:bg-primary-1 hover:text-white duration-300 self-end"}
                            onClickLink={onClickEditHandler}><p className={"icon-arrow-left"}></p>
                        </Button>
                        <Button
                            url={"/login"}
                            type={"button"}
                            className={`h-10  bg-white rounded-2xl border-primary-2  w-full transition ease-in-out delay-50 hover:bg-primary-1 hover:text-white duration-300 self-end ${isDisabled ? "hidden":"visible"} ` }
                            onClickLink={onClickSaveHandler}><p className={""}>Save</p>
                        </Button>
                    </div>

                </div>

                <form className={"h-fit flex flex-col justify-around m-10  "} onChange={formChangeHandler}>
                    <div className={"flex-col md:flex-row flex w-full justify-around"}>
                        <div className={"rounded-2xl my-4 mr-5 w-full "}>
                            <label>Name</label>
                            <input type={"text"} placeholder={"your name"} value={state.name} name={"name"}
                                   className={inputClassName}
                                   disabled={isDisabled}

                            />
                        </div>
                        <div className={" rounded-2xl my-4 md:ml-5 w-full"}>
                            <label>mail</label>
                            <input type={"mail"} placeholder={"mail@gmail.com"} value={state.mail} name={"mail"}
                                   className={inputClassName}
                                   disabled={isDisabled}
                            />
                        </div>
                    </div>
                    <div className={" rounded-2xl my-4"}>
                        <label>Gender</label>
                        <input type={"text"} placeholder={"your gender"} value={state.gender} name={"gender"}
                               className={inputClassName}
                               disabled={isDisabled}
                        />
                    </div>

                    <div className={" rounded-2xl my-4"}>
                        <label>heigth :{state.heigth} cm</label>
                        <input type={"range"}
                               key={"heigth"}
                               name={"heigth"}
                               value={state.heigth}
                               min={130}
                               max={210}
                               disabled={isDisabled}
                               className={"h-12 accent-primary-1 w-full focus:outline-none focus:bg-primary-1 focus:text-white focus:rounded-2xl border-b-primary-2 border-b-2 "}/>
                    </div>

                    <div className={" rounded-2xl my-4"}>
                        <label>weigth :{state.weigth} kg</label>
                        <input type={"range"}
                               name={"weigth"}
                               value={state.weigth}
                               disabled={isDisabled}
                               min={30} max={200}
                               className={"h-12 accent-primary-1 w-full focus:outline-none focus:bg-primary-1 focus:text-white focus:rounded-2xl border-b-primary-2 border-b-2 "}/>
                    </div>


                </form>

            </div>
            <div className={` flex w-4/5 h-5/6 m-4 flex-col bg-white  rounded-2xl my-4 shadow-2xl ${isDisabled ? "visible":"hidden"}`}>
                <div className={"flex flex-col px-2 justify-between items-center border-b-2 border-b-primary-2 h-fit bg-gradient-to-b from-primary-2 to-primary-1 rounded-t-2xl text-scarWhite-1"}>
                    <div className={"text-2xl 2xl:text-4xl w-full py-4 flex flex-row justify-between "}>
                        <p>Hello ,{state.name}</p>
                        <Button
                            url={"/login"}
                            type={"button"}
                            className={"h-10 bg-primary-1- rounded-2xl border-primary-2  w-1/12 transition ease-in-out delay-50 hover:bg-primary-1 hover:text-white duration-300 self-end text-xl"}
                            onClickLink={onClickEditHandler}><p className={"icon-pencil"}></p>
                        </Button>
                    </div>

                    <div className={"w-full flex items-center justify-center mb-4  h-24 "}>
                        <img className=" h-full w-24 rounded-full ring-2  bg-white"  alt=""/>
                    </div>
                </div>

                <div className={"h-full w-full flex flex-col  justify-around items-center lg:text-xl"}>

                    <div className={"w-full flex justify-around "}>
                        <p className={"w-1/3 my-4 pb-2 border-b-2 border-b-primary-2"}>Name: {state.name}</p>
                        <p className={"w-1/3 my-4 pb-2 border-b-2 border-b-primary-2"}>Mail: {state.mail}</p>
                    </div>


                    <div className={"w-full flex justify-around "}>
                        <p className={"w-1/3 my-4 pb-2 border-b-2 border-b-primary-2"}>Height: {state.heigth} cm</p>
                        <p className={"w-1/3 my-4 pb-2 border-b-2 border-b-primary-2"}>Weight: {state.weigth} cm</p>

                    </div>

                    <div className={"w-full flex justify-around "}>
                        <p className={"w-1/3 my-4 pb-2 border-b-2 border-b-primary-2"}>Gender: {state.gender}</p>

                    </div>

                </div>
            </div>
        </div>

    )
}