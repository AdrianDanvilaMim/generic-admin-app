import {Button} from "../components/Button.tsx";
import { useNavigate} from "react-router-dom";
import {useState} from "react";

type User={
    name:string,
    password:string,
    email:string,
    gender:string,
    height:number,
    weight:number
}


export const Register =()=>{

    const [name, setName] = useState<string>("your name")
    const [password, setPassword] = useState<string>("")
    const [gender, setGender] = useState<string>("your gender")
    const [email, setEmail] = useState<string>("your@email.com")
    const [height, setHeight] = useState<number>(30)
    const [weight, setWeight] = useState<number>(30)
    const user:User ={
        name,
        password,
        email,
        gender,
        height,
        weight
    }

    const inputClassName="h-12 w-full focus:outline-none focus:bg-primary-1 focus:text-white focus:rounded-2xl border-b-primary-2 border-b-2 transition ease-in-out delay-50 duration-300"
    const navigate = useNavigate();
    const postUser=async (url: string, body:User) => {
        const response = await fetch(url, {
            body: JSON.stringify(body),
            method:"POST"
        })
        return await response.json()
    }
    const checkEmail=async (url: string, body:{email:string}) => {
        const response = await fetch(url, {
            body: JSON.stringify(body),
            method:"GET"
        })
        return await response.json()
    }
    const onClickHandler =async (url: string) => {
        console.log(JSON.stringify(user))

        if (await checkEmail("http://", {email: email})){
            "error"
        }else{
            //this function will make a post petition and the back will send back a confirmation of the post
            if (await postUser("endpoint", user))

                navigate(url);
        }

    }
   const formChangeHandler=(event)=>{
        switch (event.target.name){
            case "name":
                setName(event.target.value)
                console.log(user)
                return

            case "password":
                setPassword(event.target.value)

                console.log(user)
                return

            case "email":
                setEmail(event.target.value)

                console.log(user)
                return
            case "height":
                setHeight(event.target.value)
                console.log(user)
                return

            case "weight":
                 setWeight(event.target.value)
                console.log(user)
                return

            case "gender":
                setGender(event.target.value)
                console.log(user)
                return

        }
   }
    return(
        <main className={"bg-[url('../../public/bg-login.png')] bg-cover h-screen w-full flex flex-col justify-center items-center"}>
            <div className={"bg-white  w-fit h-fit xl:w-1/3   flex flex-col rounded-2xl shadow-2xl"}>
                    <h1 className={'text-4xl m-5'}>Register</h1>
                    <div className={" h-fit m-5 "}>
                        <form className={"h-fit flex flex-col justify-around my-10  "} onChange={formChangeHandler}>
                            <div className={"flex-row flex w-full justify-around"}>
                                <div className={"rounded-2xl my-4 mr-5 w-full "}>
                                    <label>Name</label>
                                    <input type={"text"} placeholder={""} name={"name"}
                                           className={inputClassName}/>
                                </div>
                                <div className={" rounded-2xl my-4 ml-5 w-full"}>
                                    <label>Email</label>
                                    <input type={"email"} placeholder={""} name={"email"}
                                           className = {inputClassName}/>
                                </div>
                            </div>

                            <div className={" rounded-2xl my-4"}>
                                <label>Password</label>
                                <input type={"password"} placeholder={""} name={"password"}
                                       className = {inputClassName}/>
                            </div>
                            <div className={" rounded-2xl my-4"}>
                                <label>Height :{user?.height} cm</label>
                                <input type={"range"}
                                       key={"height"}
                                       name={"height"}
                                       value={height}
                                       min={130}
                                       max={210}
                                       className={"h-12 accent-primary-1 w-full focus:outline-none focus:bg-primary-1 focus:text-white focus:rounded-2xl border-b-primary-2 border-b-2 "}/>
                            </div>

                            <div className={" rounded-2xl my-4"}>
                                <label>Weight :{user?.weight} kg</label>
                                <input type={"range"}
                                       name={"weight"}
                                       value={weight}
                                       min={30} max={200}
                                       className={"h-12 accent-primary-1 w-full focus:outline-none focus:bg-primary-1 focus:text-white focus:rounded-2xl border-b-primary-2 border-b-2 "}/>
                            </div>


                        </form>

                        <div className={"h-fit my-2 flex-col justify-between"}>
                            <div className={"flex justify-between"}>

                                <Button
                                    url={"/register"}
                                    type={"button"}
                                    className={"h-10 bg-white rounded-2xl border-primary-2 border-2   w-3/12 transition ease-in-out delay-50 hover:bg-primary-1 hover:text-white duration-300"}
                                    onClick={onClickHandler}>Go In
                                </Button>
                            </div>
                        </div>
                    </div>
            </div>
        </main>
    )
}