import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from './counter'
import todoSlice from './todo'



export const store = configureStore({
  reducer: {
    counter:counterSlice,
    todo:todoSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch