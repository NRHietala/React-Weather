import styled from "styled-components";

export const CardContainer = styled.div`
  background: rgb(101, 140, 187);
  background: radial-gradient(
    circle,
    rgba(101, 140, 187, 0.9780127245508982) 0%,
    rgba(27, 73, 88, 1) 79%
  );
  height: 100%;
  width: 100%;
  max-height: 550px;
  max-width: 550px;
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
  white-space: nowrap;
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
  padding: 5% 0%;
`;

export const AuxWeather = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 5% 0%;
`;

export const ControlPanel = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.button`
  background: ${props => props.theme.danger};
  border-radius: 50px;
  padding: 1% 2%;

  &:hover {
    border: 2px solid #fff;
  }
`;
