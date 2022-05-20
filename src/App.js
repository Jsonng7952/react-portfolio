import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage';
import ContactPage from './components/ContactPage';
import { GlobalStyle } from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from './components/styles/Theme'
import Nav from './components/Nav';
import { AppContainer } from './components/styles/App.styled';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={DarkTheme}>
        <Router>
          <AppContainer>
            <Nav />
            <Routes>  
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>            
          </AppContainer>
        </Router>     
      </ThemeProvider>
    </>
  );
}

export default App;
