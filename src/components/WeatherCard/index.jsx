import React from "react";
import {
  CardContainer,
  CardWrapper,
  SunRiseSet,
  DisplayInfo,
  Label,
  MainWeather,
  ImageWrap,
  Image,
  TempRange,
  AuxWeather,
} from "./WeatherCardElements";

const WeatherCard = props => {
  const {
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

  const dateTimeConversion = dateTime => {
    return new Date(dateTime * 1000).toLocaleDateString("en-US");
  };

  const timeConversion = time => {
    return new Date(time * 1000).toLocaleTimeString("en-US");
  };

  return (
    <CardContainer>
      <CardWrapper>
        <SunRiseSet>
          <DisplayInfo fontSize="2rem">
            <Label fontSize="2rem" color="red">
              🌞 Sunrise
            </Label>
            {timeConversion(sunrise)}
          </DisplayInfo>
          <DisplayInfo fontSize="2rem">
            <Label fontSize="2rem" color="red">
              Sunset 🌜
            </Label>
            {timeConversion(sunset)}
          </DisplayInfo>
        </SunRiseSet>
        <MainWeather>
          <DisplayInfo fontSize="3rem">{cityName}</DisplayInfo>
          <DisplayInfo fontSize="1.5rem">
            {dateTimeConversion(dateTime)}
          </DisplayInfo>
          <ImageWrap>
            <Image
              src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}
              height="60px"
              width="60px"
            />
          </ImageWrap>
          <DisplayInfo fontSize="2rem">
            <Label>{description}</Label>
          </DisplayInfo>
        </MainWeather>
        <TempRange>
          <DisplayInfo fontSize="2rem">
            <Label>Low</Label>
            {minTemp}°F
          </DisplayInfo>
          <DisplayInfo fontSize="2rem">
            <Label>Current Temp</Label> {temp}°F
          </DisplayInfo>
          <DisplayInfo fontSize="2rem">
            <Label>Max</Label> {maxTemp}°F
          </DisplayInfo>
        </TempRange>
        <AuxWeather>
          <DisplayInfo fontSize="2rem">
            <Label>Real Feel</Label> {realFeel}°F
          </DisplayInfo>
          <DisplayInfo fontSize="2rem">
            <Label>Humidity</Label> {humidity}%
          </DisplayInfo>
        </AuxWeather>
      </CardWrapper>
    </CardContainer>
  );
};

export default WeatherCard;
