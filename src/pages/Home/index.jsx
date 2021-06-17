import React from "react";
import WeatherCard from "../../components/WeatherCard/index";

import { HomeContainer, HomeWrapper } from "./HomeElements";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeWrapper>
          <p>Home Component</p>
          <WeatherCard />
        </HomeWrapper>
      </HomeContainer>
    </>
  );
};

export default Home;
