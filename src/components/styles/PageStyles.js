import styled, { keyframes } from "styled-components";

const fadeInLeft = keyframes`
  0% {
     opacity: 0;
     transform: translateX(-50px);
  }
  100% {
     opacity: 1;
     transform: translateX(0);
  }
`

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

  animation: ${fadeInLeft} 1.5s ease;
`

export const StyledContainer = styled.div`
  position: relative;
  background-color: ${props => props.theme.primaryBody};
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.1;
    background-size: 20px 20px;
    background-image:
    linear-gradient(to right, grey 1px, transparent 1px),
    linear-gradient(to bottom, grey 1px, transparent 1px);
  }
`