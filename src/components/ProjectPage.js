import React from 'react';
import { StyledHeader } from './styles/PageStyles';
import { 
  ProjectContainer, 
  ProjectContent,
  ProjectCard, 
  ProjectTitle, 
  ProjectImage, 
  ProjectDescription, 
  ProjectLink, 
  ProjectSplit } from './styles/ProjectPage.styled';
  import FortniteShop from '../assets/images/fortnite-shop.png'


function ProjectPage() {
  return (
    <ProjectContainer>
      <StyledHeader>PROJECTS</StyledHeader>
      <ProjectContent>
        {/*Project 1*/}
        <ProjectCard>
          <ProjectTitle>FortShop</ProjectTitle>
          <ProjectSplit>
            <ProjectImage>
              <img src={FortniteShop} alt='Fortnite Shop'></img>
            </ProjectImage>
            <ProjectDescription>
              <p>A fictional shop where users can browse through daily items, sort items by type from Fortnite and add items to their cart.</p>  
              <p>Built using React, React-Router and Fortnite API.</p>
            </ProjectDescription>            
          </ProjectSplit>
          <ProjectLink>Links</ProjectLink>
        </ProjectCard>          
      </ProjectContent>
    </ProjectContainer>
  )
}

export default ProjectPage;