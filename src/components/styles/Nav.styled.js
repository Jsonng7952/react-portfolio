import styled from "styled-components";

export const NavContainer = styled.div`
  padding: 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.primaryBody};
  font-family: ${props => props.theme.fontFamily};
`

export const LinkContainer = styled.ul`
  display: flex;
  gap: 1em;
  line-height: 1.6;
`

export const LogoLink = styled.h1`
  cursor: pointer;
  display: inline-block;
  color: ${props => props.theme.primaryText};
  font-size: clamp(2rem, 1.5vw, 3rem);
`

export const TextLink = styled.li`
  list-style: none;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
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