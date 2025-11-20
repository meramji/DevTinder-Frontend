import { createSlice } from "@reduxjs/toolkit";

const requestslice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addrequests: (state, action) => action.payload,
  },
});

export const { addrequests } = requestslice.actions;
export default requestslice.reducer;
