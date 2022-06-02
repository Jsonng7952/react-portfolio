import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.primaryText};
  background-color: ${props => props.theme.primaryBody};
  font-family: ${props => props.theme.fontFamily};
  border: 1px solid red;
`