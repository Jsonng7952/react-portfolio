import React from 'react';
import { AboutContainer, AboutContent, AboutSection, AboutText, AboutSkills, SkillContainer, TechIcon, TechName } from './styles/AboutPage.styled';
import { StyledHeader } from './styles/PageStyles';
import { JavaScriptLogo, HTMLLogo, CSSLogo, ReactLogo, NodeJSLogo, GITLogo } from '../assets/Svgs';
import ProfileFull from '../assets/images/profile-full.png'

function AboutPage() {
  return (
    <AboutContainer>
      <StyledHeader>ABOUT</StyledHeader>
      <AboutContent>
        <AboutSection>
          <div>
            <AboutText>
              <p>I'm a front-end developer located in New York. I love to create simple yet beautiful websites with great user experience.</p>
              <p>I work with React, JavaScript (ES6+), CSS and HTML to deliver quality front-end products.</p>
              <p>I'm plan on working with NodeJS and EXPRESS for the back-end.</p>
            </AboutText> 
            <AboutSkills>
              <SkillContainer>
                <TechIcon>
                  <JavaScriptLogo />             
                  <TechName>JAVASCRIPT</TechName>     
                </TechIcon>
                <TechIcon>
                  <HTMLLogo />             
                  <TechName>HTML</TechName>     
                </TechIcon>
                <TechIcon>
                  <CSSLogo />             
                  <TechName>CSS</TechName>     
                </TechIcon>
                <TechIcon>
                  <ReactLogo />             
                  <TechName>REACT</TechName>     
                </TechIcon>
                <TechIcon>
                  <NodeJSLogo />             
                  <TechName>NODE JS</TechName>     
                </TechIcon>
                <TechIcon>
                  <GITLogo />             
                  <TechName>GIT</TechName>     
                </TechIcon>               
              </SkillContainer>
            </AboutSkills>              
          </div>
          <img src={ProfileFull} alt=''></img>   
        </AboutSection>
      </AboutContent>
    </AboutContainer>
  )
}

export default AboutPage;