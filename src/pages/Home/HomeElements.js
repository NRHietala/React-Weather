import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly; // temporary spaces components
  min-height: 88.8vh;
  width: 100%;
  background: ${props => props.theme.bgColor};
`;
