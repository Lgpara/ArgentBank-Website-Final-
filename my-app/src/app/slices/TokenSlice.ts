import { createSlice } from "@reduxjs/toolkit"

const tokenInitialState = ""

export const tokenSlice = createSlice({
  name: "token",
  initialState: tokenInitialState,
  reducers: {
    storeToken: (state, action) => {
      return action.payload
    },
  },
})


export const { storeToken } = tokenSlice.actions

export default tokenSlice.reducer
