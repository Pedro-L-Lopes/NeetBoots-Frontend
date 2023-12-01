import { configureStore } from "@reduxjs/toolkit";

import authClientReducer from "./slices/clientAuthSlice";
import productReducer from "./slices/productSlice";
import brandReducer from "./slices/brandSlice";

export const store = configureStore({
  reducer: {
    authClient: authClientReducer,
    product: productReducer,
    brand: brandReducer,
  },
});
