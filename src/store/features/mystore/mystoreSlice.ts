import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../types";

type mystoreState = {
  data: IProduct[];
};

const initialState: mystoreState = {
  data: [],
};

const mystoreSlice = createSlice({
  name: "mystore",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.data = action.payload;
    },
  },
});

export const { setProducts } = mystoreSlice.actions;

export default mystoreSlice.reducer;
