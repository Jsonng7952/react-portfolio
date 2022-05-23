import styled, { keyframes } from "styled-components";
import { StyledContainer } from "./PageStyles";

export const HomeContainer = styled(StyledContainer)`
  position: relative;
  background-color: ${props => props.theme.primaryBody};
  height: 100vh;
  width: 100vw;

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

export const HomeContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.primaryText};
  padding: 0 1.5rem;

  height: 60vh;
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

  svg {
    animation: ${float} 3s ease-in-out infinite;
  }
`

export const HomeSplit = styled.div`
  img {
    width: 100%;
  }
`

export const HomeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  line-height: 1.6;
  color: ${props => props.theme.primaryText};
  font-size: calc(1em + 1.5vw);
  font-family: ${props => props.theme.fontFamily};

  &>*:last-child {
    color: lightgray;
  }
`