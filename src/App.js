import React from 'react';

import './App.css';
import PicDiv from './Components/picDiv/PicDiv';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';


function App() {
  return (
    <React.Fragment>
      <Header />
      <PicDiv />  
      <About/>
    </React.Fragment>
    );
}

export default App;
