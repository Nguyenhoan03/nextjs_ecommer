"use client";

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// Import reducer từ slices
import authReducer from "./slice/authSlice";
// import cartReducer from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // cart: cartReducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hook
export const useAppDispatch: () => AppDispatch = useDispatch;
