import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/clientAuthService";

const client = JSON.parse(localStorage.getItem("cliente"));

const initialState = {
  client: client ? client : null,
  error: false,
  success: false,
  loading: false,
};

// Registrando e logando cliente
export const registerClient = createAsyncThunk(
  "auth/registerClient",
  async (client, thunkAPI) => {
    const data = await authService.registerClient(client);

    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }

    return data;
  }
);

export const authSlice = createSlice({
  name: "authClient",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerClient.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(registerClient.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = false;
        state.client = action.payload;
      })
      .addCase(registerClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.client = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
