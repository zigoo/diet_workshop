import React, { Component } from 'react';
import PosilekHeader from './Posilek/Header/Header.js';
import PosilekDescripton from './Posilek/Description/Description.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Posilek-header">
          <PosilekHeader />
        </div>
        <div className="Posilek-description">
          <PosilekDescripton />   
        </div> 
      </div>
    );
  }
}

export default App;
