import React from "react";
import { useSelector } from "react-redux";
import { WeatherCard } from "../index";
import { GalleryContainer, GalleryWrapper } from "./GalleryElements";

const Gallery = () => {
  const weather = useSelector(state => state.weather);

  return (
    <GalleryContainer>
      <GalleryWrapper>
        {weather.map(weather => (
          <WeatherCard key={weather.id} id={weather.id} />
        ))}
      </GalleryWrapper>
    </GalleryContainer>
  );
};

export default Gallery;
