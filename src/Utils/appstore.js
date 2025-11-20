import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import Feedreducer from "./Feedslice";
import connectionreducer from "./Connectionslice";
import requestreducer from "./Requestslice";

const appstore = configureStore({
  reducer: {
    user: userReducer,
    feed: Feedreducer,
    connection: connectionreducer,
    requests: requestreducer,
  },
});

export default appstore;
