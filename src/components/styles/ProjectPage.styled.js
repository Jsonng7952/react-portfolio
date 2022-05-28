import styled, { keyframes } from "styled-components";
import { StyledContainer } from "./PageStyles";

export const ProjectContainer = styled(StyledContainer)`
  font-family: ${props => props.theme.fontFamily};
  flex-grow: 1;
`

export const ProjectContent = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.primaryText};
  padding: 1rem 2rem;
  gap: 2rem;
  overflow-y: auto;
  height: 80vh;

  border-top: 2px solid ${props => props.theme.primaryText};
  border-bottom: 2px solid ${props => props.theme.primaryText};

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
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
  border-top: 1px solid ${props => props.theme.primaryText};
  border-bottom: 1px solid ${props => props.theme.primaryText};
  padding: 1rem;
  max-width: 1000px;

  opacity: 0;
  animation: ${fadeInLeft} 1.5s ease 0.8s;
  animation-fill-mode: forwards;
`

export const ProjectTitle = styled.h1`
  text-align: center;
`

export const ProjectSplit = styled.div`
  display: flex;
  padding: 1rem;
  gap: 2rem;

  // Temporary
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ProjectImage = styled.div`
  padding: 1rem;
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
  padding: 1rem;
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
    font-size: calc(1em + 0.5vw);
    padding-bottom: 0.5rem;
  }

  &>*:last-child {
    color: darkgrey;
    font-style: italic;
  }
`

export const ProjectLink = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    color: ${props => props.theme.primaryText};
    font-style: italic;
    font-weight: bold;
    font-size: 1.5rem;
    
    padding: 0 1rem;
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