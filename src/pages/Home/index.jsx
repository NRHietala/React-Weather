import React from "react";
import { WeatherCard } from "../../components/index";

import { HomeContainer, HomeWrapper } from "./HomeElements";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeWrapper>
          <WeatherCard />
        </HomeWrapper>
      </HomeContainer>
    </>
  );
};

export default Home;
