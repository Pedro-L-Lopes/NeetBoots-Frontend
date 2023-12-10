import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import brandService from "../services/brandService";

const initialState = {
  brands: [],
  brand: {},
  error: false,
  success: false,
  loading: false,
  message: null,
};

// Pegar todos os produtos
export const getAllBrands = createAsyncThunk("brand/getAll", async () => {
  const data = await brandService.getAllBrands();
  return data;
});

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBrands.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.brands = action.payload;
      });
  },
});

export const { resetMessage } = brandSlice.actions;
export default brandSlice.reducer;
