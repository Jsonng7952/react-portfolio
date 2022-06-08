import styled, { keyframes } from "styled-components";
import { StyledContainer } from "./PageStyles";

export const HomeContainer = styled(StyledContainer)`
  font-family: ${props => props.theme.fontFamily};
  flex-grow: 1;
`

export const HomeContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.primaryText};
  padding: 0 1.5em;
  height: 70vh;

  // Temporary
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
`

export const HomeCenter = styled.div`
  position: absolute;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;

  // On click shrink icon and move to bottom right
  top: ${props => props.click ? "85%" : "50%"};
  left: ${props => props.click ? "85%" : "50%"};
  transform: translate(-50%, -50%);
  transition: all 2s ease;

  svg {
    animation: ${float} 3s ease-in-out infinite;
  }
`

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

export const HomeSplit = styled.div`
  opacity: 0;
  display: ${props => props.click ? "inline-block" : "none"};
  animation: ${fadeInLeft} 1.5s ease 1s;
  animation-fill-mode: forwards;
  animation-direction: ${props => props.click ? "normal" : "reverse"};

  img {
    max-width: 100%;
    height: auto;
  }
`

export const HomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.6;
  color: ${props => props.theme.primaryText};
  font-size: clamp(1.5rem, 1.5vw, 3rem);

  &>*:last-child {
    color:  ${props => props.theme.primaryText};

    padding: 0 1em;
    background-image: linear-gradient(${props => props.theme.primaryText}, ${props => props.theme.primaryText}),
                      linear-gradient(${props => props.theme.primaryText}, ${props => props.theme.primaryText}),
                      linear-gradient(${props => props.theme.primaryText}, ${props => props.theme.primaryText}),
                      linear-gradient(${props => props.theme.primaryText}, ${props => props.theme.primaryText});
    background-repeat: no-repeat;
    background-size: 8px 1px;
    background-position: top left, top right, bottom left, bottom right;
    border: solid ${props => props.theme.primaryText};
    border-width: 0 1px;   

    text-decoration: none;
  }
`
