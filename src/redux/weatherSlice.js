import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getWeather = createAsyncThunk("weather/getWeather", async () => {
  // hard coded for now
  const response = await fetch(
    `api.openweathermap.org/data/2.5/weather?q=esko&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
  );
  if (response.ok) {
    const weather = await response.json();
    return { weather };
  }
});

export const weatherSlice = createSlice({
  name: "weather",
  initialState: [],
  reducers: {},
  extraReducers: {},
});

export default weatherSlice.reducer;
