import React from "react";
import { WeatherCard } from "../index";
import { GalleryContainer, GalleryWrapper } from "./GalleryElements";

const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryWrapper>
        <WeatherCard />
      </GalleryWrapper>
    </GalleryContainer>
  );
};

export default Gallery;
