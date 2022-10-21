import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import respositoriesReducer from "./reducers/respositoriesReducer";

export const store = configureStore({
  reducer: {
    repositories: respositoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
