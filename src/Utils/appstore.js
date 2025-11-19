import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import Feedreducer from "./Feedslice";
import connectionreducer from "./Connectionslice";

const appstore = configureStore({
  reducer: {
    user: userReducer,
    feed: Feedreducer,
    connection: connectionreducer,
  },
});

export default appstore;
