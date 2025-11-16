import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import Feedreducer from "./Feedslice";

const appstore = configureStore({
  reducer: {
    user: userReducer,
    feed: Feedreducer,
  },
});

export default appstore;
