import {Button} from "../components/share/Button.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {User} from "../types/types.ts";
import {inputClassName} from "../constants/constants.tsx";
import {userCancelUpdate, userChangeValue} from "../reducers/userSlice.tsx";
import {useAppDispatch, useAppSelector} from "../hooks/hooks.ts";

export const Register = () => {

  //todo
  const [user ,setUser] = useState<User>({
    name: "string",
    mail: "string",
    gender: "string",
    password: "",
    height: 2,
    weight: 2
  })


  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.user.user)


  const [required , setRequired] = useState(false)

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

  const checkMail = async (url: string) => {
    const response = await fetch(url, {
      method: "GET",
    })

    return await response.json()
  }

  async function onSubmitHandler(e) {
    e.preventDefault()

    console.log(e.target.mail.invalid)
    console.log(user)
    //validation
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(state.mail) ){
      //change styles to validated
    }else{
      //change styles to non validated
      e.target.mail.value=""
      dispatch(userChangeValue({value: "", typeData: "mail"}))
      e.target.mail.placeholder="non valid email"

    }

    if ( state.password != "" ){
      //change styles to validated
    }else{
      //change styles to non validated
      e.target.password.value=""
      dispatch(userChangeValue({value: "", typeData: "password"}))
      e.target.password.placeholder="non valid password"

    }

    if (state.name!="" ){
      //change styles to validated
    }else{
      //change styles to non validated
      e.target.name.value=""
      dispatch(userChangeValue({value: "", typeData: "password"}))
      e.target.name.placeholder="non valid name"

    }

    if (re.test(state.mail) && state.password != "" && state.name!="" ) {
      console.log("validated")
      try {
        //await checkMail("http://localhost:8080/api/user/mailVerification/" + mail)
        setRequired(true)
        //change email styles to non validated
        console.log("mail ya existe");
        e.target.mail.value=""
        dispatch(userChangeValue({value: "", typeData: "mail"}))
        e.target.mail.placeholder="this mail is already in use"
      } catch (error) {
        console.log("no existe el mail");
        //change email styles to validated
        //await postUser("http://localhost:8080/api/user", user)
        //password validation then post
        //if (await postUser("http://localhost:8080/api/user", user))
        navigate("/");
      }
    }
    else {
      console.log("non validated")
      setRequired(true)
    }
  }

  const formChangeHandler = (event) => {
    dispatch(userChangeValue({value: event.target.value, typeData: event.target.name}))
  }

  return (
    <main
      className={"bg-[url('../../public/bg-login.png')] bg-cover h-fit w-full flex flex-col justify-center items-center"}>
      <div
        className={"bg-white border-primary-1/15 border-2 w-fit h-fit xl:w-1/3  my-4  flex flex-col rounded-2xl shadow-2xl"}>
        <h1 className={'text-3xl mx-5 mt-5'}>Register</h1>
        <div className={" h-fit mx-5 "}>
          <form className={"h-fit flex flex-col justify-around my-5  "} onSubmit={onSubmitHandler}
                onChange={formChangeHandler}>
            <div className={"flex-row flex w-full justify-around"}>
              <div className={"rounded-2xl my-4 mr-5 w-full "}>
                <label>Name</label>
                <input type={"text"} placeholder={"your name"} name={"name"}
                       className={inputClassName}
                        required={required}/>
              </div>
              <div className={" rounded-2xl my-4 ml-5 w-full"}>
                <label>mail</label>
                <input type={"text  "}
                       placeholder={"mail@gmail.com"} name={"mail"} defaultValue={""}
                       className={inputClassName}
                        required={required}
                        />
              </div>
            </div>
            <div className={" rounded-2xl my-4"}>
              <label>Gender</label>
              <input type={"text"}
                     placeholder={"your gender"} name={"gender"}
                     className={inputClassName}
                     required={required}/>
            </div>
            <div className={" rounded-2xl my-4"}>
              <label>Password</label>
              <input type={"password"}
                     placeholder={"**************"} name={"password"}
                     className={inputClassName}
                     required={required}/>
            </div>
            <div className={" rounded-2xl my-4"}>
              <label>height :{state.height} cm</label>
              <input type={"range"}
                     key={"height"}
                     name={"height"}
                     value={state.height}
                     min={130}
                     max={210}
                     className={"h-12 accent-primary-1 w-full focus:outline-none focus:bg-primary-1 focus:text-white focus:rounded-2xl border-b-primary-2 border-b-2 "}/>
            </div>

            <div className={" rounded-2xl my-4"}>
              <label>weight :{state.weight} kg</label>
              <input type={"range"}
                     name={"weight"}
                     value={state.weight}
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