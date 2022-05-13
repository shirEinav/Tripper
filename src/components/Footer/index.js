import React from 'react';
import { IoLogoGithub } from 'react-icons/io5';
import { StyledFooter } from './styles.css';

const Footer = () => {
  return (
    <StyledFooter>
      <a
        href='https://github.com/shirEinav/Tripper'
        target='_blank'
        rel='noreferrer'
      >
        <IoLogoGithub />
        <p>Built by Shir Einav</p>
      </a>
    </StyledFooter>
  );
};

export default Footer;
