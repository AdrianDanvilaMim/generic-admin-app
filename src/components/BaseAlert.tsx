import {useState} from "react"

type alertType = "error" | "succes" | "warning"
type visibilitiType = "visible" | "hidden"

interface BaseAlertpropsImteface {
    type: alertType
    visibility: visibilitiType
}

export const BaseAlert = ({type, visibility}: BaseAlertpropsImteface) => {
    const [visibilityAlert, setVisibilityAlert] = useState<visibilitiType>(visibility)
    let bgColor: string = type ? "error" : "bg-indigo-500"

    return (
        <div className={"flex flex-col w-1/5  fixed " + bgColor + " " + visibilityAlert}>
            <div></div>
            <button onClick={() => {
                setVisibilityAlert("hidden")
            }}>X
            </button>
        </div>
    )
}