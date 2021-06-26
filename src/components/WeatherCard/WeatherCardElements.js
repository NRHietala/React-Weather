import styled from "styled-components";

export const CardContainer = styled.div`
  background: rgb(93, 129, 172);
  background: radial-gradient(
    circle,
    rgba(93, 129, 172, 1) 27%,
    rgba(45, 67, 253, 1) 100%
  );
  height: 100%;
  width: 100%;
  max-height: 550px;
  max-width: 630px;
  margin: 3vh 3vw;
  border-radius: 50px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 5%;
  color: white;
`;

export const SunRiseSet = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8%;
`;

export const DisplayInfo = styled.p`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 1%;
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
  padding: 3%;
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
  padding: 7% 0%;
`;

export const AuxWeather = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`;
