import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../types";
import config from "../../../utils/config";

type productState = {
  products: IProduct[];
  loading: boolean;
  error?: string | null;
};

const initialState: productState = {
  products: [],
  loading: false,
  error: "",
};
export const fetchProducts = createAsyncThunk(
  "products/fetchData",
  async () => {
    const response = await fetch(`${config.baseUrl}/products`);
    if (!response.ok) {
      throw new Error();
    }
    const jsonData = await response.json();
    return jsonData.products as IProduct[];
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
