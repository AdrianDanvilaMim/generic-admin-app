import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  data: []
}
export const genericSlice = createSlice(
  {
    name: "",
    initialState: initialState,
    reducers: {}
  }
)

