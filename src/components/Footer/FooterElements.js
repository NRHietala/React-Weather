import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: ${props => props.theme.primary};
  height: 5vh;
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
  height: 100%;
  padding: 0px 24px;
  margin: 0 auto;
`;

export const Logo = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 2px;
`;

export const WebRights = styled.small`
  color: ${props => props.theme.secondary};
  font-size: 1.4rem;
`;

export const ContactIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactIconLink = styled.a`
  color: ${props => props.theme.secondary};
  padding: 0px 5px;
  font-size: 2.4rem;
`;
