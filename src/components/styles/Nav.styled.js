import styled from "styled-components";

export const NavContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.primaryBody};
  font-family: ${props => props.theme.fontFamily};
`

export const LinkContainer = styled.ul`
  display: flex;
  gap: 1rem;
  line-height: 1.6;
`

export const LogoLink = styled.h1`
  cursor: pointer;
  display: inline-block;
  color: ${props => props.theme.primaryText};
`

export const TextLink = styled.li`
  list-style: none;
  font-size: 0.8rem;
  padding: 0 1rem;
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