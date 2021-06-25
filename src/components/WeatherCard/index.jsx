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

  const timeConversion = time => {
    return new Date(time * 1000).toLocaleTimeString("en-US");
  };

  return (
    <CardContainer>
      <CardWrapper>
        <SunRiseSet>
          <DisplayInfo fontSize="2rem" color="red">
            sunrise {timeConversion(sunrise)}
          </DisplayInfo>
          <DisplayInfo fontSize="2rem">
            sunset {timeConversion(sunset)}
          </DisplayInfo>
        </SunRiseSet>
        <MainWeather>
          <DisplayInfo fontSize="3rem">{cityName}</DisplayInfo>
          <DisplayInfo fontSize="2rem">
            {dateTimeConversion(dateTime)}
          </DisplayInfo>
          <ImageWrap>
            <Image
              src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}
            />
          </ImageWrap>
          <DisplayInfo fontSize="2rem">desc {description}</DisplayInfo>
        </MainWeather>
        <TempRange>
          <DisplayInfo fontSize="2rem">min {minTemp}</DisplayInfo>
          <DisplayInfo fontSize="2rem">current {temp}</DisplayInfo>
          <DisplayInfo fontSize="2rem">max {maxTemp}</DisplayInfo>
        </TempRange>
        <AuxWeather>
          <DisplayInfo fontSize="2rem">real feel {realFeel}</DisplayInfo>
          <DisplayInfo fontSize="2rem">humidity {humidity}</DisplayInfo>
        </AuxWeather>
      </CardWrapper>
    </CardContainer>
  );
};

export default WeatherCard;
