import { createSlice } from "@reduxjs/toolkit";

const Feedslice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addfeed: (state, action) => action.payload,
    removeuserfeed: (state, action) => {
      const newfeed = state.filter((user) => user._id !== action.payload);
      return newfeed;
    },
  },
});

export const { addfeed, removeuserfeed } = Feedslice.actions;
export default Feedslice.reducer;
