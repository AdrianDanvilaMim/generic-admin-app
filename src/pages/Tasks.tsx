import {Task} from "../components/Task.tsx";

export const Tasks =()=>{

    return(
        <div className={"bg-white w-11/12 h-fit m-4 shadow-2xl "}>
            <div className={"m-4 text-3xl border-b-2 border-b-primary-2"}>
                <h3>Titulo</h3>
            </div>
            <Task></Task>
            <Task></Task>
            <Task></Task>
            <Task></Task>
        </div>
    )
}