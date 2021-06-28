import React from "react";
import { useDispatch } from "react-redux";
import { deleteWeather } from "../../redux/weatherSlice";
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
  ControlPanel,
  Btn,
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

  const dispatch = useDispatch();

  const dateTimeConversion = dateTime => {
    return new Date(dateTime * 1000).toLocaleDateString("en-US");
  };

  const timeConversion = time => {
    return new Date(time * 1000).toLocaleTimeString("en-US");
  };

  const handleDelete = () => {
    dispatch(deleteWeather({ id: id }));
  };

  return (
    <CardContainer>
      <CardWrapper>
        <SunRiseSet>
          <DisplayInfo fontSize="1.5rem">
            <Label fontSize="2rem" padding="1%">
              🌞 Sunrise
            </Label>
            {timeConversion(sunrise)}
          </DisplayInfo>
          <DisplayInfo fontSize="1.5rem">
            <Label fontSize="2rem" padding="1%">
              Sunset 🌜
            </Label>
            {timeConversion(sunset)}
          </DisplayInfo>
        </SunRiseSet>
        <MainWeather>
          <DisplayInfo fontSize="4rem">{cityName}</DisplayInfo>
          <DisplayInfo fontSize="1.7rem">
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
            <Label fontSize="2.4rem">{description}</Label>
          </DisplayInfo>
        </MainWeather>
        <TempRange>
          <DisplayInfo fontSize="1.5rem">
            <Label fontSize="2rem">Low</Label>
            {minTemp} °F
          </DisplayInfo>
          <DisplayInfo fontSize="3rem">{temp} °F</DisplayInfo>
          <DisplayInfo fontSize="1.5rem">
            <Label fontSize="2rem">High</Label> {maxTemp} °F
          </DisplayInfo>
        </TempRange>
        <AuxWeather>
          <DisplayInfo fontSize="1.5rem">
            <Label fontSize="2rem">Real Feel</Label> {realFeel} °F
          </DisplayInfo>
          <DisplayInfo fontSize="1.5rem">
            <Label fontSize="2rem">Humidity</Label> {humidity} %
          </DisplayInfo>
        </AuxWeather>
        <ControlPanel>
          {/* <Btn>Convert to Celcius</Btn> */}
          <Btn onClick={handleDelete}>Delete Card</Btn>
          {/* <Btn>Forecast</Btn> */}
        </ControlPanel>
      </CardWrapper>
    </CardContainer>
  );
};

export default WeatherCard;
