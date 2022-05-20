import styled from "styled-components";
import { StyledContainer } from "./PageStyles";

export const HomeContainer = styled(StyledContainer)`
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

export const HomeContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.primaryText};
  padding: 0 1.5rem;
`

export const HomeSplit = styled.div`

`

export const HomeText = styled.div`
  color: ${props => props.theme.primaryText};
  line-height: 1.6;
  font-size: 3em;
  font-family: ${props => props.theme.fontFamily};
`