import React from 'react';
import { FooterContainer, ContactContainer } from './styles/Footer.styled';
import { EmailLogo, GithubLogo, LinkedinLogo } from '../assets/Svgs';


function Footer() {
  return (
    <FooterContainer>
      <ContactContainer>
        <a target="_blank" rel='noreferrer' href="mailto: jason.ng7952@gmail.com">
          <EmailLogo width={20} fill='currentColor'/>          
        </a>
        <a target="_blank" rel='noreferrer' href="https://github.com/Jsonng7952/">
          <GithubLogo width={20} fill='currentColor'/>          
        </a>
        <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/">
          <LinkedinLogo width={20} fill='currentColor'/>          
        </a>
      </ContactContainer>
    </FooterContainer>
  )
}

export default Footer