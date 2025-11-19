import { createSlice } from "@reduxjs/toolkit";

const Connectionslice = createSlice({
  name: "connection",
  initialState: null,
  reducers: {
    addconnections: (state, action) => action.payload,
    removeconnections: () => null,
  },
});

export const {addconnections,removeconnections} = Connectionslice.actions;
export default Connectionslice.reducer;
