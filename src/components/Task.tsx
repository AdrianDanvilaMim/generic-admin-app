import {useAppSelector} from "../hooks/hooks.ts";
import {Button} from "./Button.tsx";
import {useNavigate} from "react-router-dom";

export const Task  = ()=>{
    const state =  useAppSelector((state)=>state.user.user)
    const navigate =  useNavigate()
    function clickHandler(){
        navigate("/")
    }
    return(
        <div className={"mx-4"}>
            <div className={"w-full border-b-2 border-b-secondary-2 grid grid-cols-4 h-12     items-center"}>
                <p>name:</p>
                <p>more data</p>
                <p>more data</p>
                <Button type={"button"} className={"bg-primary-1 text-secondary-1 hover:bg-primary-3 hover:text-scarWhite-1 rounded-2xl h-10 w-1/2 justify-self-end"  }>
                    Details
                </Button>
            </div>
        </div>
    )
}