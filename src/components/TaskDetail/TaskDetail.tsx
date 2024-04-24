import {useAppSelector} from "../../hooks/hooks.ts";
import {Button} from "../Button.tsx";
import {useNavigate} from "react-router-dom";
import {TaskDetailsType} from "../../types/types.ts";

interface TaskProps{

    taskDetails?:TaskDetailsType | null
}


export const TaskDetail = ({taskDetails}:TaskProps) => {
    //todo
    const state = useAppSelector((state) => state.task)

    return (
        <div className={"mx-4"}>
            <div className={"w-full border-b-2 border-b-secondary-2 grid grid-cols-4 h-12     items-center"}>
                <p>name:{taskDetails?.name}</p>
                <p>Description: {taskDetails?.description}</p>
                <Button type={"button"}
                        className={"  hover:bg-primary-1 hover:text-scarWhite-1 rounded-2xl h-10 w-1/2 justify-self-end"}>
                    Edit
                </Button>
            </div>
        </div>
    )
}