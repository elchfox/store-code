import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../types";
import config from "../../../utils/config";
import { v4 as uuidv4 } from "uuid";

type modeType = "create" | "edit" | "none";
type productState = {
  products: IProduct[];
  currentProduct: IProduct;
  loading: boolean;
  error?: string | null;
  modeType?: modeType;
};

const initialProduct: IProduct = {
  title: "",
  description: "",
  price: 0,
  thumbnail: "https://dummyimage.com/640x360/fff/aaa",
};
const initialState: productState = {
  products: [],
  currentProduct: initialProduct,
  loading: false,
  modeType: "none",
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
    setCurrentProduct(state, action: PayloadAction<IProduct>) {
      state.currentProduct = action.payload;
    },
    setModeType(state, action: PayloadAction<modeType>) {
      console.log(action.payload);
      state.modeType = action.payload;
      if (action.payload === "create") {
        state.currentProduct = initialProduct;
      }
    },
    productCreateAndUpdate(state, action: PayloadAction<IProduct>) {
      const products = state.products;
      const currentDate = new Date();
      if (action.payload.id) {
        const indexOf = products.findIndex(
          (item) => item.id === action.payload.id
        );
        products[indexOf] = {
          ...products[indexOf],
          ...action.payload,
          updateDate: currentDate,
        };
      } else {
        products.unshift({
          ...action.payload,

          updateDate: currentDate,
          createDate: currentDate,
          id: uuidv4(),
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

export const {
  productCreateAndUpdate,
  productDeleteById,
  setModeType,
  setCurrentProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
