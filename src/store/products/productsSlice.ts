import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, IStorageName } from "../../types";
import config from "../../utils/config";
import { v4 as uuidv4 } from "uuid";

type modeType = "create" | "edit";
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
  modeType: "create",
  error: "",
};
export const fetchProducts = createAsyncThunk(
  "products/fetchData",
  async () => {
    const localData = localStorage.getItem(IStorageName.products);
    if (localData) {
      return JSON.parse(localData);
    }
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
    setCurrentProduct(state, action: PayloadAction<IProduct | undefined>) {
      state.currentProduct = action.payload || initialProduct;
      state.modeType = "edit";
    },
    setModeType(state, action: PayloadAction<modeType>) {
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
        const createProduct = {
          ...action.payload,
          updateDate: currentDate,
          createDate: currentDate,
          id: uuidv4(),
        }
        products.unshift(createProduct);
        state.currentProduct = {...createProduct}
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
