import {createSlice, PayloadAction} from "@reduxjs/toolkit";
const initialState ={
    data:[]
}
export const genericSlice = createSlice(
    {
        name:"",
        initialState:initialState,
        reducers:{
            genericAdd(state,actions:PayloadAction<string>){

            }
        }
}
)

export const {genericAdd} = genericSlice.actions