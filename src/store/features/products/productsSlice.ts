import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../types";
import config from "../../../utils/config";

type productState = {
  products: IProduct[];
  loading: boolean;
  error?: string | null;
  createMode: boolean;
};

const initialState: productState = {
  products: [],
  loading: false,
  createMode: false,
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
    setCreateModeToggle(state) {
      state.createMode = !state.createMode;
    },
    productCreateAndUpdate(state, action: PayloadAction<IProduct>) {
      const products = state.products;
      const updateOrCreatedDate = new Date();
      if (action.payload.id) {
        const indexOf = products.findIndex(
          (item) => item.id === action.payload.id
        );
        products[indexOf] = {
          ...products[indexOf],
          ...action.payload,
          updateDate: updateOrCreatedDate,
        };
      } else {
        products.unshift({
          ...action.payload,
          updateDate: updateOrCreatedDate,
          createDate: updateOrCreatedDate,
        });
      }
      localStorage.setItem("/products", JSON.stringify(products));
      state.products = products;
    },
    productDeleteById(state, action: PayloadAction<number | string>) {
      const products = state.products;
      const indexOf = products.findIndex((item) => item.id === action.payload);
      indexOf >= 0 && products.splice(indexOf, 1);
      localStorage.setItem("/products", JSON.stringify(products));
      state.products = products;
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

export const { productCreateAndUpdate, productDeleteById,setCreateModeToggle } =
  productsSlice.actions;

export default productsSlice.reducer;
