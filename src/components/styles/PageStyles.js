import styled from "styled-components";

export const StyledHeader = styled.h2`
  position: relative;
  color: ${props => props.theme.secondText};
  background-color: ${props => props.theme.secondBody};
  display: inline-block;
  padding: 0 1.5rem;
  margin: 2rem 0;
  line-height: 0.8;
  font-weight: normal;
  font-family: ${props => props.theme.fontFamily};
`

export const StyledContainer = styled.div`
  position: relative;
  background-color: ${props => props.theme.primaryBody};
  height: 100%;
`