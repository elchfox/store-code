import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mystoreSlice from "./features/mystore/mystoreSlice";

const rootReducer = combineReducers({
  mystore: mystoreSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
