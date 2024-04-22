import {TaskList} from "../components/TaskList.tsx";
import {BaseTable} from "../components/BaseTable.tsx";
import { useAppSelector } from "../hooks/hooks.ts";

export  const Dashboard = ()=>{
    const state =  useAppSelector((state)=>state.user)

    console.log(state);
    
    return(
        <div className={"m-2 flex justify-around flex-wrap w-full"}>
            <div className={"flex justify-center items-end  h-52 bg-white w-1/3 rounded-2xl my-4"}>
                <p>bbb</p>
            </div>
            <TaskList></TaskList>
            <BaseTable headers={["nombre","apellido1","apellido2"]} data={[["juan","alberto","muñoz"],["4","5","6"],["7","8","9"],["7","8","9"],["7","8","9"],["7","8","9"],["7","8","9"],["7","8","9"]]}/>

        </div>

    )
}