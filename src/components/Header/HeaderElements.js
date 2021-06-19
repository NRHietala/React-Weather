import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 80px;
  background: ${({ theme }) => theme.primary};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
`;

export const HeaderLogo = styled.span`
  font-size: 4rem;
  padding: 0 5px;
`;

export const HeaderTitle = styled.h1`
  font-size: 4rem;
  padding: 0 5px;
  white-space: nowrap;
`;
