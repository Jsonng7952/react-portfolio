import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.primaryText};
  background-color: ${props => props.theme.primaryBody};
  font-family: ${props => props.theme.fontFamily};
`

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  flex: 1;

  svg {
    cursor: pointer;
  }

  a {
    color: inherit;
  }
`