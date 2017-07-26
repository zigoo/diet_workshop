import React, { Component } from 'react';
import MealHeader from './Meal/Header/Header.js';
import MealDescripton from './Meal/Description/Description.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Meal-header">
          <MealHeader />
        </div>
        <div className="Meal-description">
          <MealDescripton />   
        </div> 
      </div>
    );
  }
}

export default App;
