import { Button } from "../components/Button.tsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



type User = {
    name: string,
    password: string,
    mail: string,
    gender: string,
    heigth: number,
    weigth: number
}


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
    const user: User = {
        name,
        password,
        mail,
        gender,
        heigth,
        weigth
    }

    const inputClassName = "h-12 w-full focus:outline-none focus:bg-primary-1 focus:text-white focus:rounded-2xl border-b-primary-2 border-b-2 transition ease-in-out delay-50 duration-300"
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
    const onClickHandler = async (url: string) => {
        try {
            await checkmail("http://localhost:8080/api/user/mailVerification/" + mail)
            console.log("mail ya existe");

        } catch (error) {
            sethassedPassword(bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u'))

            console.log("no existe el mail");
            await postUser("http://localhost:8080/api/user", user)
            //if (await postUser("http://localhost:8080/api/user", user))
            //navigate(url);

        }
    }
    const formChangeHandler = (event) => {
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
        <main className={"bg-[url('../../public/bg-login.png')] bg-cover h-screen w-full flex flex-col justify-center items-center"}>
            <div className={"bg-white  w-fit h-fit xl:w-1/3   flex flex-col rounded-2xl shadow-2xl"}>
                <h1 className={'text-4xl m-5'}>Register</h1>
                <div className={" h-fit m-5 "}>
                    <form className={"h-fit flex flex-col justify-around my-10  "} onChange={formChangeHandler}>
                        <div className={"flex-row flex w-full justify-around"}>
                            <div className={"rounded-2xl my-4 mr-5 w-full "}>
                                <label>Name</label>
                                <input type={"text"} placeholder={"your name"} name={"name"}
                                    className={inputClassName} />
                            </div>
                            <div className={" rounded-2xl my-4 ml-5 w-full"}>
                                <label>mail</label>
                                <input type={"mail"} placeholder={"mail@gmail.com"} name={"mail"}
                                    className={inputClassName} />
                            </div>
                        </div>
                        <div className={" rounded-2xl my-4"}>
                            <label>Gender</label>
                            <input type={"text"} placeholder={"your gender"} name={"gender"}
                                className={inputClassName} />
                        </div>
                        <div className={" rounded-2xl my-4"}>
                            <label>Password</label>
                            <input type={"password"} placeholder={"**************"} name={"password"}
                                className={inputClassName} />
                        </div>
                        <div className={" rounded-2xl my-4"}>
                            <label>heigth :{user?.heigth} cm</label>
                            <input type={"range"}
                                key={"heigth"}
                                name={"heigth"}
                                value={heigth}
                                min={130}
                                max={210}
                                className={"h-12 accent-primary-1 w-full focus:outline-none focus:bg-primary-1 focus:text-white focus:rounded-2xl border-b-primary-2 border-b-2 "} />
                        </div>

                        <div className={" rounded-2xl my-4"}>
                            <label>weigth :{user?.weigth} kg</label>
                            <input type={"range"}
                                name={"weigth"}
                                value={weigth}
                                min={30} max={200}
                                className={"h-12 accent-primary-1 w-full focus:outline-none focus:bg-primary-1 focus:text-white focus:rounded-2xl border-b-primary-2 border-b-2 "} />
                        </div>


                    </form>

                    <div className={"h-fit my-2 flex-col justify-between"}>
                        <div className={"flex justify-between"}>

                            <Button
                                url={"/login"}
                                type={"button"}
                                className={"h-10 bg-white rounded-2xl border-primary-2 border-2   w-3/12 transition ease-in-out delay-50 hover:bg-primary-1 hover:text-white duration-300"}
                                onClickLink={onClickHandler}>Go In
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}