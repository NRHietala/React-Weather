import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    value: null,
  },
  reducers: {},
});

export default weatherSlice.reducer;
