import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../types/types.ts";


type userState = {
  user: User
  userBackUp: User
}
const initialState: userState = {
  user: {
    id: "11",
    name: "string",
    mail: "string",
    gender: "string",
    height: 2,
    weight: 2
  },
  userBackUp: {
    id: "11",
    name: "string",
    mail: "string",
    gender: "string",
    height: 2,
    weight: 2
  }
}
export const userSlice = createSlice(
  {
    name: "userReducer",
    initialState: initialState,
    reducers: {
      userAdd(state, actions: PayloadAction<User>) {
        console.log(actions.payload);
        actions.payload.password = ""
        state.user = actions.payload
        state.userBackUp = state.user
        console.log(state);

      },
      userChangeValue(state, actions: PayloadAction<{ value: string, typeData: string }>) {
        console.log(actions.payload)
        switch (actions.payload.typeData) {
          case "name":
            state.user.name = actions.payload.value
            return
          case "mail":
            state.user.mail = actions.payload.value

            return
          case "height":
            state.user.height = Number.parseInt(actions.payload.value)
            return

          case "weight":
            state.user.weight = Number.parseInt(actions.payload.value)

            return

          case "gender":
            state.user.gender = actions.payload.value
            return
        }
        console.log(state.user.name)

      },
      userUpdate(state) {
        state.userBackUp = state.user
        // send to the back the user updated
        console.log(state);
      },
      userCancelUpdate(state) {
        state.user = state.userBackUp
        console.log(state);
      },

      userExit(state) {
        state.user = {
          id: "0",
          name: "",
          mail: "",
          gender: "",
          height: 0,
          weight: 0
        }
        state.userBackUp = state.user
      },
    }
  }
)

export const {userAdd, userChangeValue, userCancelUpdate, userUpdate, userExit} = userSlice.actions