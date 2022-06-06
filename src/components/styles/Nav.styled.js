import styled from "styled-components";

export const NavContainer = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.primaryBody};
  font-family: ${props => props.theme.fontFamily};
`

export const LinkContainer = styled.ul`
  position: fixed;
  background-color: ${props => props.theme.primaryBody};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  transform: ${props => props.click ? "translateX(0%)" : "translateX(100%)"};
  transition: .25s 0s ease-in-out;

  a {
    text-decoration: none;
  }
`

export const LogoLink = styled.h1`
  cursor: pointer;
  display: inline-block;
  color: ${props => props.theme.primaryText};
  font-size: clamp(2rem, 1.5vw, 3rem);
`

export const TextLink = styled.li`
  list-style: none;
  font-size: clamp(2rem, 1.5vw, 4rem);
  
  padding: 0 1em;
  color: ${props => props.theme.primaryText};

  background-image: linear-gradient(${props => props.theme.primaryText}, ${props => props.theme.primaryText}),
                      linear-gradient(${props => props.theme.primaryText}, ${props => props.theme.primaryText}),
                      linear-gradient(${props => props.theme.primaryText}, ${props => props.theme.primaryText}),
                      linear-gradient(${props => props.theme.primaryText}, ${props => props.theme.primaryText});
  background-repeat: no-repeat;
  background-size: 8px 1px;
  background-position: top left, top right, bottom left, bottom right;
  border: solid ${props => props.theme.primaryText};
  border-width: 0 1px;
`

export const NavButton = styled.button`
  padding: 0.5em;
  background: transparent;
  border: 0;
  cursor: pointer;
  z-index: 1000;
`

export const OpenLinkHamburger = styled.span`
  width: 1.5em;
  height: 3px;
  border-radius: 1em;
  display: block;
  position: relative;
  background-color: ${props => props.theme.primaryText};

  transition: ${props => props.click ? "all 0.5s ease-in-out" : "all 0.5s ease-in-out 0.3s"};
  background: ${props => props.click ? "none" : ""};

  &::before,
  &::after {
    content: "";
    background-color: ${props => props.theme.primaryText};
    height: 3px;
    border-radius: 1em;
    position: absolute;
    left: 0;
    right: 0;
    
    transition: ${props => props.click ? "all 0.5s ease-in-out" : "all 0.5s ease-in-out 0.3s"};
  }

  &::before {
    width: 2em;
    bottom: 6px;
    // On Click
    transform: ${props => props.click ? "translateX(10px)" : "translateX(0px)"};
    background: ${props => props.click ? "none" : ""};
  }

  &::after {
    width: 1em;
    top: 6px;
    // On Click
    transform: ${props => props.click ? "translateX(-10px)" : "translateX(0px)"};
    background: ${props => props.click ? "none" : ""};
  }
`

export const CloseLinkHamburger = styled.span`
  display: block;
  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: ${props => props.theme.primaryText};
    height: 3px;
    border-radius: 1em;
    position: absolute;
    left: 0;
    right: 0;
    
    transition: ${props => props.click ? "all 0.5s ease-in-out 0.3s" : "all 0.5s ease-in-out"};
  }

  &::before {
    width: 2em;
    bottom: 6px;
    // On Click
    transform: ${props => props.click ? "translateY(6px) rotate(45deg) " : ""};
    background: ${props => props.click ? "" : "none"};
  }

  &::after {
    width: ${props => props.click ? "2em" : "1em"};
    top: 3px;
    // On Click
    transform: ${props => props.click ? "translateY(-6px) rotate(-45deg) " : ""};
    background: ${props => props.click ? "" : "none"};
  }
`
