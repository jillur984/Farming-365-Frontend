// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../slice/authSlice"

// export const store=configureStore({
//     reducer:{
//         auth:authReducer
//     }
// })
import authReducer from "../store/features/auth/authSlice"
import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {auth:authReducer},
  })
}