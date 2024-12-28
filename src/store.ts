import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./features/api/productsApi";
import { userApi } from "./features/api/userApiSlice";
import cartSlice from "./features/cartSlice";
import orderSlice from "./features/orderSlice";
import userSlice from "./features/userSlice";
import userMenuToggle from "./features/userToggleSlice";


export const store = configureStore({
  reducer: {
    cart: cartSlice,
    userMenu: userMenuToggle,
    userSlice: userSlice,
    orderSlice: orderSlice,
    [userApi.reducerPath]: userApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([userApi.middleware, productsApi.middleware])
  },
})

setupListeners(store.dispatch)

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']