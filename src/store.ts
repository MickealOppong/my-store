import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import userSlice from "./features/userSlice";
import userMenuToggle from "./features/userToggleSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    userMenu: userMenuToggle,
    userSlice: userSlice
  }
})



// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']