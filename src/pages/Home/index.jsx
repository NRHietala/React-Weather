import React from "react";
import { Search, Gallery } from "../../components/index";

import { HomeContainer } from "./HomeElements";

const Home = () => {
  return (
    <HomeContainer>
      <Search />
      <Gallery />
    </HomeContainer>
  );
};

export default Home;
