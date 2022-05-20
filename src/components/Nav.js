import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer, NavContainer, LogoLink, TextLink } from './styles/Nav.styled';

function Nav() {
  return (
    <NavContainer>
      <Link to='/'>
        <LogoLink>JN</LogoLink>
      </Link>
      <LinkContainer>
        <Link to='/'>
          <TextLink>[ HOME ]</TextLink>  
        </Link>
        <Link to='/about'>
          <TextLink>[ ABOUT ]</TextLink>        
        </Link>
        <Link to='/projects'>
          <TextLink>[ PROJECTS ]</TextLink>        
        </Link>
        <Link to='/contact'>
          <TextLink>[ CONTACT ]</TextLink>        
        </Link>
      </LinkContainer>
    </NavContainer>
  )
}

export default Nav;