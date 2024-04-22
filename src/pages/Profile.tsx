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
        <div className={"w-full p-8 flex h-full  lg:flex-row"}>
            <div className={" flex w-full lg:w-3/4 h-fit  my-4  flex-col bg-white justify-center rounded-2xl"}>
                <div className={"flex mx-2 justify-between items-center"}>
                    <p className={"text-4xl border-b-2 border-b-primary-2 w-full py-4"}>Hello ,this is your info</p>
                    <Button
                        url={"/login"}
                        type={"button"}
                        className={"h-10 bg-white rounded-2xl border-primary-2  w-1/12 transition ease-in-out delay-50 hover:bg-primary-1 hover:text-white duration-300 self-end"}
                        onClickLink={onClickEditHandler}><p className={"icon-pencil"}></p>
                    </Button>
                    <Button
                        url={"/login"}
                        type={"button"}
                        className={`h-10 mx-4 bg-white rounded-2xl border-primary-2  w-1/12 transition ease-in-out delay-50 hover:bg-primary-1 hover:text-white duration-300 self-end ${isDisabled ? "hidden":"visible"} ` }
                        onClickLink={onClickSaveHandler}><p className={""}>Save</p>
                    </Button>



                </div>

                <form className={"h-fit flex flex-col justify-around m-10  "} onChange={formChangeHandler}>
                    <div className={"flex-row flex w-full justify-around"}>
                        <div className={"rounded-2xl my-4 mr-5 w-full "}>
                            <label>Name</label>
                            <input type={"text"} placeholder={"your name"} value={state.name} name={"name"}
                                   className={inputClassName}
                                   disabled={isDisabled}

                            />
                        </div>
                        <div className={" rounded-2xl my-4 ml-5 w-full"}>
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
            <div className={" lg:flex w-full hidden h-fit md:w-1/4 md:h-5/6 m-4 flex-col bg-white  rounded-2xl my-4 shadow-2xl"}>
                <div className={"flex flex-col px-2 justify-between items-center border-b-2 border-b-primary-2 h-fit bg-gradient-to-b from-primary-2 to-primary-1 rounded-t-2xl text-scarWhite-1"}>
                    <p className={"text-2xl 2xl:text-4xl w-full py-4"}>Hello ,this is your info</p>
                    <div className={"w-full flex items-center justify-center mb-4  h-36 "}>
                        <img className=" h-full w-8/12 rounded-full ring-2  bg-white"  alt=""/>
                    </div>
                </div>

                <div className={"h-full flex flex-row  justify-around items-"}>
                    <div className={"bg-black h-24 w-1/4"}>
                        <p>a</p>
                    </div>

                    <div className={"bg-black h-24 w-1/4"}>
                        <p>a</p>
                    </div>

                    <div className={"bg-black h-24 w-1/4"}>
                        <p>a</p>
                    </div>
                </div>
            </div>
        </div>

    )
}