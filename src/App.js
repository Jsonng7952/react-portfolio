import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage';
import { GlobalStyle } from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from './components/styles/Theme'
import Nav from './components/Nav';
import { AppContainer } from './components/styles/App.styled';

function App() {

  const [theme, setTheme] = useState(DarkTheme);

  const themeChange = () => {
    (theme === DarkTheme)
    ? setTheme(LightTheme)
    : setTheme(DarkTheme)
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <AppContainer>
            <Nav themeChange={themeChange}/>
            <Routes>  
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectPage />} />
            </Routes>            
          </AppContainer>
        </Router>     
      </ThemeProvider>
    </>
  );
}

export default App;
