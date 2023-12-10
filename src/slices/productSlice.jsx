import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "../services/productService";

const initialState = {
  products: [],
  product: {},
  error: false,
  success: false,
  loading: false,
  message: null,
};

// Pegar todos os produtos
export const getAllProducts = createAsyncThunk("product/getAll", async () => {
  const data = await productService.getAllProducts();
  return data;
});

export const searchProducts = createAsyncThunk(
  "products/search",
  async (query, limit, offset) => {
    const data = await productService.searchProducts(query, limit, offset);

    return data;
  }
);

export const promotionProducts = createAsyncThunk(
  "product/promotions",
  async () => {
    const data = await productService.promotionProducts();

    return data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(searchProducts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(promotionProducts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(promotionProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.products = action.payload;
      });
  },
});

export const { resetMessage } = productSlice.actions;
export default productSlice.reducer;
