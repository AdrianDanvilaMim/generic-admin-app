import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type User = {
    name: string,
    password: string,
    mail: string,
    gender: string,
    heigth: number,
    weigth: number
}
type userState={
    user:User
}
const initialState:userState ={
    user:{
        name: "string",
        password: "string",
        mail: "string",
        gender: "string",
        heigth: 2,
        weigth: 2
    }
}
export const userSlice = createSlice(
    {
        name:"userRweducer",  
        initialState:initialState,
        reducers:{
            userAdd(state,actions:PayloadAction<User>){
                console.log(actions.payload);

                state.user = actions.payload
                console.log(state);
                
            }
        }
}
)

export const {userAdd} = userSlice.actions