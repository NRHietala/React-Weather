import React from "react";
import {
  CardContainer,
  CardWrapper,
  ImageWrap,
  Image,
  TextContent,
  Temperature,
  Text,
} from "./WeatherCardElements";

const WeatherCard = () => {
  return (
    <>
      <CardContainer>
        <CardWrapper>
          <ImageWrap>
            <Image />
            <TextContent>
              <Temperature> 98.6</Temperature>
              <Text>Partly Sunny</Text>
              <Text>Feels like 98.6</Text>
              <Text>Humidity 100%</Text>
            </TextContent>
          </ImageWrap>
        </CardWrapper>
      </CardContainer>
    </>
  );
};

export default WeatherCard;
