import { configureStore } from "@reduxjs/toolkit";

import authClientReducer from "./slices/clientAuthSlice";

export const store = configureStore({
  reducer: {
    authClient: authClientReducer,
  },
});
