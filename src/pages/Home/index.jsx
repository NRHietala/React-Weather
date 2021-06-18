import React from "react";
import { WeatherCard, Search } from "../../components/index";

import { HomeContainer, HomeWrapper } from "./HomeElements";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeWrapper>
          <Search />
          <p>test</p>
          <WeatherCard />
        </HomeWrapper>
      </HomeContainer>
    </>
  );
};

export default Home;
