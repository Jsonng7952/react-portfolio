import styled, { keyframes } from "styled-components";
import { StyledContainer } from "./PageStyles";

export const ProjectContainer = styled(StyledContainer)`
  font-family: ${props => props.theme.fontFamily};
  flex-grow: 1;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`

export const ProjectContent = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.primaryText};
  padding: 0 2em;
  gap: 1em;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
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

export const ProjectCard = styled.div`
  padding: 1em;
  max-width: 2000px;

  opacity: 0;
  animation: ${fadeInLeft} 1.5s ease 0.8s;
  animation-fill-mode: forwards;

  a {
    text-decoration: none;
  }
`

export const ProjectTitle = styled.h2`
  font-size: clamp(1.5rem, 1.5vw, 3rem);
  text-align: center;
`

export const ProjectSplit = styled.div`
  display: flex;
  padding: 1em;
  gap: 2em;

  // Temporary
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1em;
  }
`

export const ProjectImage = styled.div`
  padding: 1em;
  display: flex;
  justify-content: center;
  flex: 1;

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

  img {
    max-width: 100%;
    height: auto;
  }
`

export const ProjectDescription = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  flex: 1;

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
  
  &>*:first-child {
    font-size: clamp(0.8rem, 1.5vw, 2rem);
    padding-bottom: 0.5em;
  }

  &>*:last-child {
    color: darkgrey;
    font-size: clamp(0.8rem, 1.5vw, 1.5rem);
    font-style: italic;
  }
`

export const ProjectLink = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;

  a {
    color: ${props => props.theme.primaryText};
    font-style: italic;
    font-weight: bold;
    font-size: clamp(0.8rem, 1.5vw, 2rem);
    
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
  }
`