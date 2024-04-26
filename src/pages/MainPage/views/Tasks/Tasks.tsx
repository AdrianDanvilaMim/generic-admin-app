import {Task} from "./components/Task.tsx";
import TasksData from "../../../../../public/data.json";
import {TaskType} from "../../../../types/types.ts";
import {TaskDetail} from "./components/TaskDetail.tsx";
import {useAppSelector} from "../../../../hooks/hooks.ts";
import {Button} from "../../../../components/share/Button.tsx";
import {useEffect, useState} from "react";

export const Tasks = () => {

  const state = useAppSelector((state) => state.task.task)
  const [detailsVisibility , setDetailsVisibility] = useState(false)
  useEffect(() => {
    if (state.details==null) setDetailsVisibility(false)
    else setDetailsVisibility(true)
  }, [state]);
  return (
    <>
      <div className={"bg-white w-11/12 h-fit m-4 shadow-2xl "}>
        <div className={"m-4 text-3xl border-b-2 border-b-primary-2 flex justify-between items-center "}>
          <h3>Tasks</h3>
          <Button type={"button"}
                  className={"w-9 mb-2 items-center text-center h-fit rounded-2xl bg-white text-black hover:bg-primary-1  hover:text-scarWhite-1"}>+ </Button>
        </div>
        {/*  map the task state*/}
        <div className={" h-fit flex flex-col items-center w-full "}>
          {
            TasksData.TasksData.map((element: TaskType) => <Task task={element}></Task>)
          }
        </div>

      </div>

      <div className={`bg-white w-11/12 h-fit m-4 shadow-2xl ${detailsVisibility ? "visible":"hidden"} `}>
        <div className={"m-4 text-3xl border-b-2 border-b-primary-2 flex justify-between items-center "}>
          <h3>Task name details</h3>
          <Button type={"button"}
                  className={"w-9 mb-2 items-center text-center h-fit rounded-2xl bg-white text-black hover:bg-primary-1  hover:text-scarWhite-1"}>+ </Button>
        </div>
          <div className={" h-fit flex flex-col items-center w-full "}>
          {state.details?.map((element) => <TaskDetail taskDetails={element}></TaskDetail>)}
          </div>
      </div>
    </>


  )
}