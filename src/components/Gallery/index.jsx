import React from "react";
import { WeatherCard } from "../index";
import { GalleryContainer } from "./GalleryElements";

const Gallery = () => {
  return (
    <GalleryContainer>
      <p>Testing Gallery Component</p>
      <WeatherCard />
    </GalleryContainer>
  );
};

export default Gallery;
