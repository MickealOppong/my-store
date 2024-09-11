import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import userMenuSlice from "./features/userMenuSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    userMenu: userMenuSlice,
    userSlice: userSlice
  }
})



// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']