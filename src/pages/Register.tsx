import {Button} from "../components/Button.tsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {User} from "../types/types.ts";
import {inputClassName} from "../constants/constants.tsx";


export const Register = () => {

    const [error, setError] = useState<boolean>(false)
    const [name, setName] = useState<string>("your name")
    const [password, setPassword] = useState<string>("")
    //todo 
    const [hassedPassword, sethassedPassword] = useState<string>("")
    const [gender, setGender] = useState<string>("your gender")
    const [mail, setmail] = useState<string>("your@mail.com")
    const [heigth, setheigth] = useState<number>(30)
    const [weigth, setweigth] = useState<number>(30)

    const user: User = {name, mail, gender, password, heigth, weigth}


    const navigate = useNavigate();

    const postUser = async (url: string, user: User) => {
        if (user) console.log(user);

        const response = await fetch(url, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST"
        })

        return await response.json()
    }

    const checkmail = async (url: string) => {
        const response = await fetch(url, {
            method: "GET",
        })

        return await response.json()
    }

    function onSubmitHandler(e) {
        e.preventDefault()
        try {
            //await checkmail("http://localhost:8080/api/user/mailVerification/" + mail)
            console.log("mail ya existe");
        } catch (error) {
            console.log("no existe el mail");
            //await postUser("http://localhost:8080/api/user", user)
            //if (await postUser("http://localhost:8080/api/user", user))
            navigate("/");

        }

    }

    const formChangeHandler = (event) => {
        event.target.required=true
        switch (event.target.name) {
            case "name":

                setName(event.target.value)
                return

            case "password":
                setPassword(event.target.value)

                return

            case "mail":
                setmail(event.target.value)

                return
            case "heigth":
                setheigth(Number.parseInt(event.target.value))
                return

            case "weigth":
                setweigth(Number.parseInt(event.target.value))
                return

            case "gender":
                setGender(event.target.value)
                return

        }
    }

    return (
        <main className={"bg-[url('../../public/bg-login.png')] bg-cover h-fit w-full flex flex-col justify-center items-center"}>
            <div className={"bg-white border-primary-1/15 border-2 w-fit h-fit xl:w-1/3  my-4  flex flex-col rounded-2xl shadow-2xl"}>
                <h1 className={'text-3xl mx-5 mt-5'}>Register</h1>
                <div className={" h-fit mx-5 "}>
                    <form className={"h-fit flex flex-col justify-around my-5  "} onSubmit={onSubmitHandler}
                          onChange={formChangeHandler}>
                        <div className={"flex-row flex w-full justify-around"}>
                            <div className={"rounded-2xl my-4 mr-5 w-full "}>
                                <label>Name</label>
                                <input type={"text"} placeholder={"your name"} name={"name"}
                                       className={inputClassName}/>
                            </div>
                            <div className={" rounded-2xl my-4 ml-5 w-full"}>
                                <label>mail</label>
                                <input type={"email"}
                                       placeholder={"mail@gmail.com"} name={"mail"} defaultValue={""}
                                       className={inputClassName}/>
                            </div>
                        </div>
                        <div className={" rounded-2xl my-4"}>
                            <label>Gender</label>
                            <input type={"text"}
                                   placeholder={"your gender"} name={"gender"}
                                   className={inputClassName}/>
                        </div>
                        <div className={" rounded-2xl my-4"}>
                            <label>Password</label>
                            <input type={"password"}
                                   placeholder={"**************"} name={"password"}
                                   className={inputClassName}/>
                        </div>
                        <div className={" rounded-2xl my-4"}>
                            <label>heigth :{user?.heigth} cm</label>
                            <input type={"range"}
                                   key={"heigth"}
                                   name={"heigth"}
                                   value={heigth}
                                   min={130}
                                   max={210}
                                   className={"h-12 accent-primary-1 w-full focus:outline-none focus:bg-primary-1 focus:text-white focus:rounded-2xl border-b-primary-2 border-b-2 "}/>
                        </div>

                        <div className={" rounded-2xl my-4"}>
                            <label>weigth :{user?.weigth} kg</label>
                            <input type={"range"}
                                   name={"weigth"}
                                   value={weigth}
                                   min={30} max={200}
                                   className={"h-12 accent-primary-1 w-full focus:outline-none focus:bg-primary-1 focus:text-white focus:rounded-2xl border-b-primary-2 border-b-2 "}/>
                        </div>

                        <div className={"h-fit my-2 flex-col justify-between"}>
                            <div className={"flex justify-between"}>

                                <Button
                                    type={"submit"}
                                    className={"h-10 bg-white rounded-2xl border-primary-2 border-2   w-3/12 transition ease-in-out delay-50 hover:bg-primary-1 hover:text-white duration-300"}
                                >Go In
                                </Button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </main>
    )
}