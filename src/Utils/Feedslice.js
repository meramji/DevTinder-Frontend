import { createSlice } from "@reduxjs/toolkit";

const Feedslice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addfeed: (state, action) => action.payload,
    removefeed: (state, action) => null,
  },
});

export const { addfeed, removefeed } = Feedslice.actions;
export default Feedslice.reducer;
