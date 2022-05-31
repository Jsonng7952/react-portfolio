import styled from "styled-components";
import { StyledContainer } from "./PageStyles";

export const AboutContainer = styled(StyledContainer)`
  font-family: ${props => props.theme.fontFamily};
  flex-grow: 1;
`

export const AboutContent = styled.div`
  display: flex;
  justify-content: center;
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
`

export const AboutSkills = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
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
  font-size: 0.8em;
`