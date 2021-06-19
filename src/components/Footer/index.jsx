import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  Logo,
  WebRights,
  ContactIcons,
  ContactIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <Logo>NH</Logo>
        <WebRights>
          NH © {new Date().getFullYear()} All Rights Reserved.
        </WebRights>
        <ContactIcons>
          <ContactIconLink
            href="//www.linkedin.com/in/nrhietala/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </ContactIconLink>
          <ContactIconLink
            href="//www.github.com/nrhietala"
            target="_blank"
            aria-label="Github"
          >
            <FaGithub />
          </ContactIconLink>
        </ContactIcons>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
