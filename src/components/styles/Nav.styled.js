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
  border-bottom: 2px solid ${props => props.theme.primaryText};
  line-height: 1.6;
`

export const LogoLink = styled.h1`
  display: inline-block;
  color: ${props => props.theme.primaryText};
`

export const TextLink = styled.li`
  list-style: none;
  font-size: 1rem;
  color: ${props => props.theme.primaryText};
`