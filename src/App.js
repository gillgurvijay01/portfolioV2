import React from 'react';

import PicDiv from './Components/picDiv/PicDiv';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Work from './Components/Work/Work';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <PicDiv />  
      <About/>
      <Work/>
    </React.Fragment>
    );
}

export default App;
