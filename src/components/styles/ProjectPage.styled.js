import styled from "styled-components";
import { StyledContainer } from "./PageStyles";

export const ProjectContainer = styled(StyledContainer)`
  font-family: ${props => props.theme.fontFamily};
`

export const ProjectContent = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.primaryText};
  padding: 2rem;
  height: 70vh;
  gap: 2rem;
  overflow-y: auto;
`

export const ProjectCard = styled.div`
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding: 1rem;
  max-width: 1200px;
`

export const ProjectTitle = styled.h1`
  font-weight: 400;
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

  border: 1px solid grey;
    background:
    linear-gradient(to right, white 2px, transparent 2px) 0 0,
    linear-gradient(to right, white 2px, transparent 2px) 0 100%,
    linear-gradient(to left, white 2px, transparent 2px) 100% 0,
    linear-gradient(to left, white 2px, transparent 2px) 100% 100%,
    linear-gradient(to bottom, white 2px, transparent 2px) 0 0,
    linear-gradient(to bottom, white 2px, transparent 2px) 100% 0,
    linear-gradient(to top, white 2px, transparent 2px) 0 100%,
    linear-gradient(to top, white 2px, transparent 2px) 100% 100%;
    background-repeat: no-repeat;
    background-size: 20px 20px;

  img {
    max-width: 100%;
    height: auto;
  }
`

export const ProjectDescription = styled.div`
  padding: 1rem;

  border: 1px solid grey;
  background:
  linear-gradient(to right, white 2px, transparent 2px) 0 0,
  linear-gradient(to right, white 2px, transparent 2px) 0 100%,
  linear-gradient(to left, white 2px, transparent 2px) 100% 0,
  linear-gradient(to left, white 2px, transparent 2px) 100% 100%,
  linear-gradient(to bottom, white 2px, transparent 2px) 0 0,
  linear-gradient(to bottom, white 2px, transparent 2px) 100% 0,
  linear-gradient(to top, white 2px, transparent 2px) 0 100%,
  linear-gradient(to top, white 2px, transparent 2px) 100% 100%;
  background-repeat: no-repeat;
  background-size: 20px 20px; 
  
  &>*:first-child {
    padding-bottom: 0.5rem;
  }

  &>*:last-child {
    color: lightgrey;
    font-style: italic;
  }
`

export const ProjectLink = styled.div`

`