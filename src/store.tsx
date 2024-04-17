import {configureStore} from "@reduxjs/toolkit";
import {genericSlice} from "./reducers/genericSlice";


export const   store =  configureStore(
    {
            reducer:genericSlice.reducer
    }
)


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch