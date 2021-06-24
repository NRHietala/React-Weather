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
  const {
    id,
    sunrise,
    sunset,
    cityName,
    dateTime,
    weatherIcon,
    minTemp,
    maxTemp,
    temp,
    description,
    realFeel,
    humidity,
  } = props;

  return (
    <CardContainer>
      <CardWrapper>
        <TextContent>
          <Temperature>98.6°</Temperature>
          <Text>id{id}</Text>
          <Text>sunrise{sunrise}</Text>
          <Text>sunset{sunset}</Text>
          <Text>cityName{cityName}</Text>
          <Text>dateTime{dateTime}</Text>
          <ImageWrap>
            <Image
              src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}
            />
          </ImageWrap>
          <Text>minTemp{minTemp}</Text>
          <Text>maxTemp{maxTemp}</Text>
          <Text>temp{temp}</Text>
          <Text>description{description}</Text>
          <Text>realFeel{realFeel}</Text>
          <Text>humidity{humidity}</Text>
        </TextContent>
      </CardWrapper>
    </CardContainer>
  );
};

export default WeatherCard;
