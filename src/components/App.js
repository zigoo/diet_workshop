/* eslint-disable */
import React, { Component } from 'react';
import MenuTop from './Menu/MenuTop.js';
import MenuLeft from './Menu/MenuLeft/container.js';
import MealDescripton from './Meal/Description/container.js';
import Info from './Utils/Info/Info.js';
import Calendar from './Calendar/container.js';
import Search from './Utils/Search/component.js';
import MealCopy from './Meal/Description/MealCopy/container.js';
import MealShare from './Meal/Description/MealShare/component.js';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="grid">
        <div className="menuu">
          <MenuTop />
        </div>
        <div className="menuleft">
          <MenuLeft />
        </div>
        <div className="desc">
          <MealDescripton />
          <Info />
        </div>
        <div className="info">
          <Search />
          <Calendar />
          <MealCopy />  
        </div>
      </div>
    );
  }
}

export default App;