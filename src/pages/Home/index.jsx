import React from "react";
import { Search, Gallery, WeatherCard } from "../../components/index";

import { HomeContainer, HomeWrapper } from "./HomeElements";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeWrapper>
          <Search />
          <Gallery />
          <WeatherCard />
        </HomeWrapper>
      </HomeContainer>
    </>
  );
};

export default Home;
