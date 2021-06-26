import styled from "styled-components";

export const CardContainer = styled.div`
  background: orange;
  height: 100%;
  width: 100%;
  margin: 3vh 3vw;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const SunRiseSet = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const DisplayInfo = styled.p`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  padding: ${props => props.padding};
`;

export const Label = styled.span`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  padding: ${props => props.padding};
`;

export const MainWeather = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const ImageWrap = styled.div`
  padding: 10px;
`;

export const Image = styled.img`
  height: ${props => props.height};
  width: ${props => props.width};
  padding: ${props => props.padding};
`;

export const TempRange = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const AuxWeather = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`;
