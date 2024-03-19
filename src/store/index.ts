import { ThunkDispatch, combineReducers, configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/productsSlice";

const rootReducer = combineReducers({
  products: productsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
