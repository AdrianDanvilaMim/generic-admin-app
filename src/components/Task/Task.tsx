import {useAppDispatch, useAppSelector} from "../../hooks/hooks.ts";
import {Button} from "../Button.tsx";
import {useNavigate} from "react-router-dom";
import {TaskDetailsType, TaskType} from "../../types/types.ts";
import {userChangeValue} from "../../reducers/userSlice.tsx";
import {taskAdd, taskSlice} from "../../reducers/taskSlice.tsx";

interface TaskProps{
    task:TaskType
}


export const Task = ({task}:TaskProps) => {
    const dispatch = useAppDispatch()
    //todo

    const onClickHandler=()=>{
        dispatch(taskAdd(task))

    }

    return (
        <div className={"mx-4"}>
            <div className={"w-full border-b-2 border-b-secondary-2 grid grid-cols-4 h-12     items-center"}>
                <p>name:{task.name}</p>
                <p>User id: {task.userId}</p>
                <p>more {task.id}</p>
                <Button type={"button"}
                        onClick={onClickHandler}
                        className={"  hover:bg-primary-1 hover:text-scarWhite-1 rounded-2xl h-10 w-1/2 justify-self-end"}>
                    Details
                </Button>
            </div>
        </div>
    )
}