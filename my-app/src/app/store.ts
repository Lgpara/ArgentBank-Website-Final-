import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import userDataReducer from "./slices/UserSlice"
import tokenReducer from "./slices/TokenSlice"

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
    token: tokenReducer,
  },
  devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
