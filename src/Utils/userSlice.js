import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addusers: (state, action) => {
      return action.payload;
    },
    removeusers: (state, action) => {
      return null;
    },
  },
});

export const { addusers, removeusers } = userSlice.actions;
export default userSlice.reducer;
