import {useAppDispatch, useAppSelector} from "../../../hooks/hooks.ts";
import {userCancelUpdate, userChangeValue, userUpdate} from "../../../reducers/userSlice.tsx";
import {useState} from "react";
import {Button} from "../../../components/share/Button.tsx";
import {inputClassName} from "../../../constants/constants.tsx";
import {PATHS} from "../../../router/constants.ts";

export const Profile = () => {

  const dispatch = useAppDispatch()
  const [isEnabled, setIsEnable] = useState(true)
  const state = useAppSelector((state) => state.user.user)

  const formChangeHandler = (event) => {
    dispatch(userChangeValue({value: event.target.value, typeData: event.target.name}))
  }

  function onClickEditHandler() {
    if (!isEnabled) {
      dispatch(userCancelUpdate())
    }
    setIsEnable(!isEnabled)
  }

  function onSubmitSaveHandler(e) {
    e.preventDefault()
    console.log(state)
    if (!isEnabled) {
      dispatch(userUpdate())
    }
    setIsEnable(!isEnabled)

  }

  return (
    <div className={"w-full p-8 flex h-fit justify-center  flex-col-reverse md:flex-row"}>
      <div
        className={` flex w-full md:w-3/5 h-fit  m-4  flex-col bg-white justify-center rounded-2xl shadow-2xl $}`}>
        <div className={"flex mx-2  flex-row justify-items-start items-center"}>
          <p className={"text-4xl border-b-2 border-b-primary-2 w-full py-4"}>Hello ,this is your info</p>
        </div>
        <form className={"h-fit flex flex-col justify-around m-10  "}
              onChange={formChangeHandler}
              onSubmit={onSubmitSaveHandler}>

          <div className={"flex-col md:flex-row flex w-full justify-around"}>
            <div className={"rounded-2xl my-4 mr-5 w-full "}>
              <label>Name</label>
              <input type={"text"}
                     required={true}
                     placeholder={"your name"} value={state.name} name={"name"}
                     className={inputClassName}
                     disabled={isEnabled}
              />
            </div>
            <div className={" rounded-2xl my-4 md:ml-5 w-full"}>
              <label>mail</label>
              <input type="email"
                     placeholder={"mail@gmail.com"} value={state.mail} name={"mail"}
                     className={inputClassName}
                     disabled={isEnabled} required={true}
              />
            </div>
          </div>
          <div className={" rounded-2xl my-4"}>
            <label>Gender</label>
            <input type={"text"}
                   required={true}
                   placeholder={"your gender"} value={state.gender} name={"gender"}
                   className={inputClassName}
                   disabled={isEnabled}
            />
          </div>
          <div className={" rounded-2xl my-4"}>
            <label>height :{state.height} cm</label>
            <input type={"range"}
                   key={"height"}
                   name={"height"}
                   value={state.height}
                   min={130}
                   max={210}
                   disabled={isEnabled}
                   className={"h-12 accent-primary-1 w-full focus:outline-none focus:bg-primary-1 focus:text-white focus:rounded-2xl border-b-primary-2 border-b-2 "}/>
          </div>
          <div className={" rounded-2xl my-4"}>
            <label>weight :{state.weight} kg</label>
            <input type={"range"}
                   name={"weight"}
                   value={state.weight}
                   disabled={isEnabled}
                   min={30} max={200}
                   className={"h-12 accent-primary-1 w-full focus:outline-none focus:bg-primary-1 focus:text-white focus:rounded-2xl border-b-primary-2 border-b-2 "}/>
          </div>

          <div className={'flex-row flex  justify-between items-center  w-full h-10 mr-5'}>
            <Button
              url={PATHS.login}
              type={"button"}
              className={"h-10 bg-white rounded-2xl border-primary-2  w-4/12  transition ease-in-out delay-50 hover:bg-primary-1 hover:text-white duration-300 self-end"}
              onClickLink={onClickEditHandler}><p className={"icon-pencil"}></p>
            </Button>

            <Button
              type={"submit"}
              className={`h-10  bg-white rounded-2xl border-primary-2  w-4/12  transition ease-in-out delay-50 hover:bg-primary-1 hover:text-white duration-300 self-end ${isEnabled ? "hidden" : "visible"} `}
            ><p className={""}>Save</p>
            </Button>
          </div>
        </form>
      </div>
      <div className={`flex w-full  md:w-2/5 h-fit m-4 flex-col bg-white  rounded-2xl  shadow-2xl `}>
        <div
          className={"flex flex-col px-2 justify-between items-center border-b-2 border-b-primary-2 h-fit bg-gradient-to-b from-primary-2 to-primary-1 rounded-t-2xl text-scarWhite-1"}>
          <div className={"text-2xl 2xl:text-4xl w-full py-4 flex flex-row justify-between "}>
            <p>Hello ,{state.name}</p>
          </div>

          <div className={"w-full flex items-center justify-center mb-4  h-24 "}>
            <img className=" h-full w-24 rounded-full ring-2  bg-white" alt=""/>
          </div>
        </div>

        <div className={"h-full w-full flex flex-col   items-center lg:text-xl"}>
          <p className={"w-11/12 m-4 pb-2 border-b-2 border-b-primary-2"}>Description</p>
          <p className={"w-2/3 my-4 pb-2 "}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut
          </p>

        </div>
      </div>
    </div>

  )
}