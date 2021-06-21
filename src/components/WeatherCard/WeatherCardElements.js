import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background: orange;
  height: 500px;
  width: 400px;
  margin: 3vh 3vw;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100%;
  padding: 10px;
`;

export const ImageWrap = styled.div`
  padding: 50px;
`;

export const Image = styled.img``;

export const TextContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 20px;
`;

export const Temperature = styled.h3`
  font-size: 4rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.p`
  padding: 7px;
  font-size: 2.5rem;
`;
