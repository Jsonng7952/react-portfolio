import React, { useState } from 'react';
import { HomeContainer, HomeContent, HomeCenter, HomeSplit, HomeText } from './styles/HomePage.styled';
import { StyledHeader } from './styles/PageStyles';
import Profile from '../assets/images/profile-img.png'
import { ProfileLogo } from '../assets/Svgs';

function HomePage() {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    (click) 
    ? <HomeContainer>
        <StyledHeader>INTRODUCTION</StyledHeader>
          <HomeContent>
            <HomeSplit>
              <HomeText>
                <h1>Hi,</h1>
                <h3>I'm Jason.</h3>
                <h6>I design and code simple websites.</h6>       
                <h6>[ More Info Here! ]</h6>   
              </HomeText>          
            </HomeSplit>
            <HomeSplit>
              <div>
                <img src={Profile} alt='profile img' />
              </div>
            </HomeSplit>
          </HomeContent>
      </HomeContainer>
    : <HomeContainer>
      <StyledHeader>INTRODUCTION</StyledHeader>
        <HomeContent>
          <HomeCenter click={click}>
            <ProfileLogo onClick={handleClick} width={300} height={300} fill='currentColor'/>
          </HomeCenter>
        </HomeContent>
      </HomeContainer>
  )
}

export default HomePage;