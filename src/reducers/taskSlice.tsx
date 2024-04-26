import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TaskType} from "../types/types.ts";

type taskState = {
  task: TaskType
  taskBack: TaskType
}
const initialState: taskState = {
  task: {
    id: "1",
    name: "try 1",
    userId: "2",
    details: null,
    comments: null
  },
  taskBack: {
    id: "1",
    name: "try 1",
    userId: "2",
    details: [
      {
        "name": "detail 1",
        "description": "detail description"
      }
    ],
    comments: null
  }
}
export const taskSlice = createSlice(
  {
    name: "taskReducer",
    initialState: initialState,
    reducers: {
      taskAdd(state, actions: PayloadAction<TaskType>) {
        state.task = actions.payload
        console.log(actions.payload);
        console.log(state);
      },
    }
  }
)

export const {taskAdd} = taskSlice.actions