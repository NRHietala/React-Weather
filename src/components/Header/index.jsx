import React from "react";
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderLogo,
  HeaderTitle,
} from "./HeaderElements";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLogo>🌤</HeaderLogo>
        <HeaderTitle>React Weather</HeaderTitle>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
