import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.primary};
  height: 6vh;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
`;

export const HeaderLogo = styled.span`
  font-size: 3rem;
  padding: 2vh 2vw;
`;

export const HeaderTitle = styled.h1`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 3rem;
`;
