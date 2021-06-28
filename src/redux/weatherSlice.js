import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async payload => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
    );
    if (response.ok) {
      const weather = await response.json();
      return weather;
    } else {
      alert("Please enter a valid city name");
    }
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: [],
  reducers: {
    deleteWeather: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id);
    },
  },
  extraReducers: {
    [getWeather.pending]: (state, action) => {
      console.log("fetching weather...");
    },
    [getWeather.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { deleteWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
