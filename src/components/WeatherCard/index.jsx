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

const WeatherCard = props => {
  const { id } = props;
  const handleClick = () => {
    console.log("Change temp measurement");
  };
  return (
    <CardContainer>
      <CardWrapper>
        <ImageWrap>
          <Image />
        </ImageWrap>
        <TextContent>
          <Temperature onClick={handleClick}>98.6°</Temperature>
          <Text>{id}</Text>
          <Text>Feels like 98.6°</Text>
          <Text>Humidity 100%</Text>
        </TextContent>
      </CardWrapper>
    </CardContainer>
  );
};

export default WeatherCard;
