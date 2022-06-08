import styled, { keyframes } from "styled-components";
import { StyledContainer } from "./PageStyles";

export const AboutContainer = styled(StyledContainer)`
  font-family: ${props => props.theme.fontFamily};
  flex-grow: 1;
`

export const AboutContent = styled.div`
  display: flex;
  justify-content: center;
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

export const AboutSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 300px;
  align-items: center;
  column-gap: 2em;
  padding: 0 2em;
  color: ${props => props.theme.primaryText};
  max-width: 2000px;

  p:not(:last-child) {
    margin-bottom: 0.5em;
  }

  img {
    position: relative;
    grid-row: -1;
    grid-column: 2 / 3;
    max-width: 100%;
    height: auto;

    opacity: 0;
    animation: ${fadeInLeft} 1.5s ease 2.4s;
    animation-fill-mode: forwards;
  }

  // Temporary
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      max-width: 300px;
      max-height: 300px;
    }
  }
`

export const AboutText = styled.div`
  font-size: clamp(0.8rem, 1.5vw, 2rem);
  padding: 1em;
  margin-bottom: 1em;
  opacity: 0;
  animation: ${fadeInLeft} 1.5s ease 0.8s;
  animation-fill-mode: forwards;

  border: 1px solid grey;
  background:
    linear-gradient(to right, ${props => props.theme.primaryText} 2px, transparent 2px) 0 0,
    linear-gradient(to right, ${props => props.theme.primaryText} 2px, transparent 2px) 0 100%,
    linear-gradient(to left, ${props => props.theme.primaryText} 2px, transparent 2px) 100% 0,
    linear-gradient(to left, ${props => props.theme.primaryText} 2px, transparent 2px) 100% 100%,
    linear-gradient(to bottom, ${props => props.theme.primaryText} 2px, transparent 2px) 0 0,
    linear-gradient(to bottom, ${props => props.theme.primaryText} 2px, transparent 2px) 100% 0,
    linear-gradient(to top, ${props => props.theme.primaryText} 2px, transparent 2px) 0 100%,
    linear-gradient(to top, ${props => props.theme.primaryText} 2px, transparent 2px) 100% 100%;
  background-repeat: no-repeat;
  background-size: 20px 20px;
`

export const AboutSkills = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  opacity: 0;
  animation: ${fadeInLeft} 1.5s ease 1.6s;
  animation-fill-mode: forwards;

  border: 1px solid grey;
  background:
    linear-gradient(to right, ${props => props.theme.primaryText} 2px, transparent 2px) 0 0,
    linear-gradient(to right, ${props => props.theme.primaryText} 2px, transparent 2px) 0 100%,
    linear-gradient(to left, ${props => props.theme.primaryText} 2px, transparent 2px) 100% 0,
    linear-gradient(to left, ${props => props.theme.primaryText} 2px, transparent 2px) 100% 100%,
    linear-gradient(to bottom, ${props => props.theme.primaryText} 2px, transparent 2px) 0 0,
    linear-gradient(to bottom, ${props => props.theme.primaryText} 2px, transparent 2px) 100% 0,
    linear-gradient(to top, ${props => props.theme.primaryText} 2px, transparent 2px) 0 100%,
    linear-gradient(to top, ${props => props.theme.primaryText} 2px, transparent 2px) 100% 100%;
  background-repeat: no-repeat;
  background-size: 20px 20px;
`

export const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(60px, 150px));
`

export const TechIcon = styled.div`
  flex: 1;
  margin: 1em;

  svg {
    width: 100%;
    height: auto;
  }
`

export const TechName = styled.div`
  text-align: center;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
`