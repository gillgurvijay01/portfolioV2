import React from 'react';

import './App.css';
import PicDiv from './Components/picDiv/PicDiv';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';


function App() {
  return (
    <React.Fragment>
      <Header />
      <PicDiv />  
    </React.Fragment>
    );
}

export default App;
