import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async payload => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
    );
    if (response.ok) {
      const weather = await response.json();
      return weather;
    }
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getWeather.pending]: (state, action) => {
      console.log("fetching weather...");
    },
    [getWeather.fulfilled]: (state, action) => {
      console.log("action payload", action.payload);
      state.push(action.payload);
    },
  },
});

export default weatherSlice.reducer;
