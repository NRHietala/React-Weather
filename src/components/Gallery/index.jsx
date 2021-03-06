import React from "react";
import { useSelector } from "react-redux";
import { WeatherCard } from "../index";
import { GalleryContainer, GalleryWrapper } from "./GalleryElements";

const Gallery = () => {
  const weather = useSelector(state => state.weatherReducer);

  return (
    <GalleryContainer>
      <GalleryWrapper>
        {weather ? (
          weather.map(weather => (
            <WeatherCard
              key={weather.id}
              id={weather.id}
              sunrise={weather.sys.sunrise}
              sunset={weather.sys.sunset}
              cityName={weather.name}
              dateTime={weather.dt}
              weatherIcon={weather.weather[0].icon}
              minTemp={weather.main.temp_min}
              maxTemp={weather.main.temp_max}
              temp={weather.main.temp}
              description={weather.weather[0].description}
              realFeel={weather.main.feels_like}
              humidity={weather.main.humidity}
            />
          ))
        ) : (
          <></>
        )}
      </GalleryWrapper>
    </GalleryContainer>
  );
};

export default Gallery;
