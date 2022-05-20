import React from 'react';
import { HomeContainer, HomeContent, HomeSplit, HomeText } from './styles/HomePage.styled';
import { StyledHeader } from './styles/PageStyles';

function HomePage() {
  return (
    <HomeContainer>
      <StyledHeader>INTRODUCTION</StyledHeader>
      <HomeContent>
        <HomeSplit>
          <HomeText>
            <h1>Hi,</h1>
            <h3>I'm Jason.</h3>
            <h6>I design and code simple websites.</h6>          
          </HomeText>          
        </HomeSplit>
        <HomeSplit>
          <div>
            <img alt='profile img'></img>
          </div>
        </HomeSplit>
      </HomeContent>
    </HomeContainer>
  )
}

export default HomePage;