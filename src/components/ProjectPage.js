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
          <ProjectLink>
            <a href="https://jsonng7952.github.io/fortnite-shopping-cart/">Live Demo</a>
            <a href="https://github.com/Jsonng7952/fortnite-shopping-cart">Repository</a>
          </ProjectLink>
        </ProjectCard>       
        {/*Project 2*/}
        <ProjectCard>
          <ProjectTitle>Project 2</ProjectTitle>
          <ProjectSplit>
            <ProjectImage>
              <img src={FortniteShop} alt='Fortnite Shop'></img>
            </ProjectImage>
            <ProjectDescription>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis dolor odio, sit amet hendrerit dolor maximus quis. Suspendisse feugiat eu ex tempus consectetur.</p>  
              <p>Built using Duis sagittis ipsum felis, ut mollis purus congue eget.</p>
            </ProjectDescription>            
          </ProjectSplit>
          <ProjectLink>
            <a href="">Live Demo</a>
            <a href="">Repository</a>
          </ProjectLink>
        </ProjectCard>      
        {/*Project 3*/}
        <ProjectCard>
          <ProjectTitle>Project 3</ProjectTitle>
          <ProjectSplit>
            <ProjectImage>
              <img src={FortniteShop} alt='Fortnite Shop'></img>
            </ProjectImage>
            <ProjectDescription>
              <p>Quisque porttitor mattis dui a ornare. Nulla vel dapibus leo, quis eleifend ligula. Proin imperdiet efficitur diam, eget imperdiet mauris vestibulum a. Vivamus pulvinar nisi eros, ac dictum eros porta ac. Phasellus fringilla tellus est, sed hendrerit nunc rutrum vel. Sed cursus lectus vel justo ullamcorper, eu dictum libero placerat.</p>  
              <p>Built using Duis sagittis ipsum felis, ut mollis purus congue eget.</p>
            </ProjectDescription>            
          </ProjectSplit>
          <ProjectLink>
            <a href="">Live Demo</a>
            <a href="">Repository</a>
          </ProjectLink>
        </ProjectCard>
        {/*Project 4*/}
        <ProjectCard>
          <ProjectTitle>Project 4</ProjectTitle>
          <ProjectSplit>
            <ProjectImage>
              <img src={FortniteShop} alt='Fortnite Shop'></img>
            </ProjectImage>
            <ProjectDescription>
              <p>Quisque porttitor mattis dui a ornare. Nulla vel dapibus leo, quis eleifend ligula. Proin imperdiet efficitur diam, eget imperdiet mauris vestibulum a.</p>  
              <p>Built using Duis sagittis ipsum felis, ut mollis purus congue eget.</p>
            </ProjectDescription>            
          </ProjectSplit>
          <ProjectLink>
            <a href="">Live Demo</a>
            <a href="">Repository</a>
          </ProjectLink>
        </ProjectCard>                
      </ProjectContent>
    </ProjectContainer>
  )
}

export default ProjectPage;