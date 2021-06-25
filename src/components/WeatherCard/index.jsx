import React from "react";
import {
  CardContainer,
  CardWrapper,
  SunRiseSet,
  DisplayInfo,
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

  return (
    <CardContainer>
      <CardWrapper>
        <SunRiseSet>
          <DisplayInfo fontSize="2rem" color="red">
            sunrise{sunrise}
          </DisplayInfo>
          <DisplayInfo fontSize="2rem">sunset{sunset}</DisplayInfo>
        </SunRiseSet>
        <MainWeather>
          <DisplayInfo>{cityName}</DisplayInfo>
          <DisplayInfo>{dateTimeConversion(dateTime)}</DisplayInfo>
          <ImageWrap>
            <Image
              src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}
            />
          </ImageWrap>
          <DisplayInfo>desc{description}</DisplayInfo>
        </MainWeather>
        <TempRange>
          <DisplayInfo>min{minTemp}</DisplayInfo>
          <DisplayInfo>current{temp}</DisplayInfo>
          <DisplayInfo>max{maxTemp}</DisplayInfo>
        </TempRange>
        <AuxWeather>
          <DisplayInfo>real feel{realFeel}</DisplayInfo>
          <DisplayInfo>humidity{humidity}</DisplayInfo>
        </AuxWeather>
      </CardWrapper>
    </CardContainer>
  );
};

export default WeatherCard;
