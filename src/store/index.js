import { configureStore } from "@reduxjs/toolkit";
import createUser from "./user";
const store = configureStore({
  reducer: {
    user: createUser.reducer,
  },
});
export default store;
