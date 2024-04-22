import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type User = {
    id?: string,
    name: string,
    mail: string,
    gender: string,
    heigth: number,
    weigth: number
}
type userState={
    user:User
    userBackUp:User
}
const initialState:userState ={
    user:{
        id: "",
        name: "string",
        mail: "string",
        gender: "string",
        heigth: 2,
        weigth: 2
    },
    userBackUp:{
        id: "",
        name: "string",
        mail: "string",
        gender: "string",
        heigth: 2,
        weigth: 2
    }
}
export const userSlice = createSlice(
    {
        name:"userReducer",
        initialState:initialState,
        reducers:{
            userAdd(state,actions:PayloadAction<User>){
                console.log(actions.payload);
                state.user = actions.payload
                state.userBackUp = actions.payload
                console.log(state);

            },
            userChangeValue(state,actions:PayloadAction<{value:string,typeData:string } >){
                console.log(actions.payload)
                switch (actions.payload.typeData) {
                    case "name":
                        state.user.name=actions.payload.value
                        return
                    case "mail":
                        state.user.mail=actions.payload.value

                        return
                    case "heigth":
                        state.user.heigth= Number.parseInt(actions.payload.value)
                        return

                    case "weigth":
                        state.user.weigth= Number.parseInt(actions.payload.value)

                        return

                    case "gender":
                        state.user.gender=actions.payload.value
                        return
                }
                console.log(state.user.name)

            },
            userUpdate(state){
                state.userBackUp = state.user
                // send to the back the user updated
                console.log(state);
            },
            userCancelUpdate(state){
                state.user = state.userBackUp
                console.log(state);
            },
        }
}
)

export const {userAdd,userChangeValue,userCancelUpdate,userUpdate} = userSlice.actions