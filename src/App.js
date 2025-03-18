import React, { Suspense, lazy } from 'react';
import { Container } from 'react-bootstrap';
import Header from './Components/Header/Header';
import './App.css';
// Lazy load components for better performance
const PicDiv = lazy(() => import('./Components/picDiv/PicDiv'));
const About = lazy(() => import('./Components/About/About'));
const Work = lazy(() => import('./Components/Work/Work'));
const Projects = lazy(() => import('./Components/Projects/Projects'));
const Education = lazy(() => import('./Components/Education/Education'));

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container fluid className="p-0">
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <PicDiv />
          <About />
          <Work />
          <Education />
          <Projects />
        </Suspense>
      </Container>
    </React.Fragment>
  );
}

export default App;
