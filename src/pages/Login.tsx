import { useState } from "react";
import { Button } from "../components/Button.tsx";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/hooks.ts";
import { userAdd } from "../reducers/userSlice.tsx";

export const Login = () => {
    const [mail, setmail] = useState<string>("your@mail.com")
    const [password, setPassword] = useState<string>("")

    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const inputClassName = "h-12 w-full focus:outline-none focus:bg-primary-1 focus:text-white focus:rounded-2xl border-b-primary-2 border-b-2 transition ease-in-out delay-50 duration-300 " +
        "invalid:border-pink-500  invalid:text-pink-600\n" +
        "focus:invalid:bg-red-500 focus:invalid:ring-pink-500"

    const onClickHandler = (url: string) => {
        console.log("hola")
        navigate(url);
    }

    const checkmail = async (url: string) => {
        const response = await fetch(url, {
            method: "GET",
        })
        return await response.json()

    }

    const onSubmitLogin = async (e) => {
        e.preventDefault()
        try {
            const user =await checkmail("http://localhost:8080/api/user/mailVerification/" + mail)    
            dispatch(userAdd(user))
            navigate("/*/dashboard")
            console.log("mail exist");
        } catch (error) {
            console.log("mail no exist");
        } 
    }


    return ( 
        <main className={"bg-[url('../../public/bg-login.png')] bg-cover h-screen w-full flex flex-col justify-center items-center"}> 
            <div className={"bg-white sm:w-96 w-80 h-fit   flex flex-col rounded-2xl shadow-2xl"}>
                <h1 className={'text-4xl m-5'}>Login</h1>
                <div className={" h-full m-5 flex flex-col justify-between"}>
                    <form className={"h-64 flex flex-col justify-around disabled:invisible"} onSubmit={onSubmitLogin}>
                        <div className={" rounded-2xl"}>
                            <label>Email</label>
                            <input type={"email"} required={true}
                                   placeholder={mail}
                                   onChange={(e) => {setmail(e.currentTarget.value)}}
                                   className={inputClassName}/>
                        </div>

                        <div className={" rounded-2xl"}>
                            <label>Password</label>
                            <input type={"password"} required={true} placeholder={""}
                                   value={password} onChange={(e) => {setPassword(e.currentTarget.value)}}
                                   className={inputClassName}/>

                        </div>
                    </form>
                    <div className={"h-fit my-2 flex-col justify-between"}>
                        <div className={"flex justify-between"}>
                            <Button
                                url={"/*/dashboard"}
                                type={"button"}
                                className={"h-10 bg-white rounded-2xl border-primary-2 border-2 hover:bg-primary-1 hover:text-white  w-3/12"}
                            >Log In
                            </Button>
                            <Button
                                url={"/register"}
                                type={"button"}
                                className={"h-10 bg-white rounded-2xl border-primary-2 border-2   w-3/12 transition ease-in-out delay-50 hover:bg-primary-1 hover:text-white duration-300"}
                                onClickLink={onClickHandler}>Register
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}