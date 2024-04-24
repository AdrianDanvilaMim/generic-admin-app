import {Task} from "../components/Task/Task.tsx";
import TasksData from "../../public/data.json";
import { TaskType} from "../types/types.ts";
import {TaskDetail} from "../components/TaskDetail/TaskDetail.tsx";
import {useAppDispatch, useAppSelector} from "../hooks/hooks.ts";

export const Tasks = () => {

    const state = useAppSelector((state) => state.task.task)

    return (

        <>
            <div className={"bg-white w-11/12 h-fit m-4 shadow-2xl "}>
                <div className={"m-4 text-3xl border-b-2 border-b-primary-2"}>
                    <h3>Tasks</h3>
                </div>
                {/*  map the task state*/}
                {
                    TasksData.TasksData.map((element:TaskType)=>{
                        return(
                            <Task task={element}  ></Task>

                        )
                    })
                }

            </div>

            <div className={"bg-white w-11/12 h-fit m-4 shadow-2xl "}>
                <div className={"m-4 text-3xl border-b-2 border-b-primary-2"}>
                    <h3>Task name details</h3>
                </div>
                {state.details?.map((element)=>{
                        return(
                            <TaskDetail taskDetails={element}></TaskDetail>
                        )
                })}

            </div>
        </>


    )
}