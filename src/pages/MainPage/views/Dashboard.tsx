import {BaseTable} from "../../../components/share/BaseTable.tsx";
import useAsync, {useAppSelector} from "../../../hooks/hooks.ts";

export const Dashboard = () => {
  const state = useAppSelector((state) => state.user)

  console.log(state);

  return (
    <div className={"m-2 flex justify-around flex-wrap w-full"}>
      <BaseTable headers={["nombre", "apellido1", "apellido2"]}
                 data={[["juan", "alberto", "muñoz"], ["4", "5", "6"], ["7", "8", "9"], ["7", "8", "9"], ["7", "8", "9"], ["7", "8", "9"], ["7", "8", "9"], ["7", "8", "9"]]}/>
    </div>

  )
}