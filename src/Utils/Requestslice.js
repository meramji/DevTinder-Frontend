import { createSlice } from "@reduxjs/toolkit";

const requestslice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addrequests: (state, action) => action.payload,
    removerequest: (state, action) => {
      const newArray = state.filter((r) => r._id !== action.payload);
      return newArray;
    },
  },
});

export const { addrequests, removerequest } = requestslice.actions;
export default requestslice.reducer;
