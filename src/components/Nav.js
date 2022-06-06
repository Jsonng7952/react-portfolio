import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer, NavContainer, LogoLink, TextLink, OpenLinkHamburger, CloseLinkHamburger, NavButton} from './styles/Nav.styled';

function Nav(props) {
  const [click, setClick] = useState(false);

  const displayNav = () => {
    setClick(!click);
  };

  return (
    <NavContainer>
      <LogoLink onClick={props.themeChange}>JN</LogoLink>
      <LinkContainer click={click}>
        <Link to='/'>
          <TextLink onClick={displayNav}>HOME</TextLink>  
        </Link>
        <Link to='/about'>
          <TextLink onClick={displayNav}>ABOUT</TextLink>        
        </Link>
        <Link to='/projects'>
          <TextLink onClick={displayNav}>PROJECTS</TextLink>        
        </Link>
      </LinkContainer>
      <NavButton onClick={displayNav}>
        <OpenLinkHamburger click={click} />       
        <CloseLinkHamburger click={click} /> 
      </NavButton>
    </NavContainer>
  )
}

export default Nav;