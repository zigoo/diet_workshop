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
import Statsy from './Statsy/component.js';
import StatsyBtn from './Statsy/button.js';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="grid">
        <div className="menuu">
          <MenuTop />
        </div>
        <div className="desc">
         {this.props.children}
        </div>
        <div className="info">
          <StatsyBtn />
          <Search />
          <Calendar />
          <MealCopy />  
        </div>

        <div className="mobile-only">
          Switch to mobile/responsive view please
         </div>
      </div>
    );
  }
}

export default App;