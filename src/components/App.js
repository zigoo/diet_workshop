/* eslint-disable */
import React, { Component } from 'react';
import MenuTop from './Menu/container.js';
import MenuLeft from './Menu/MenuLeft/container.js';
import MealDescripton from './Meal/Description/container.js';
import Calendar from './Calendar/container.js';
import Search from './Utils/Search/component.js';
import MealCopy from './Meal/Description/MealCopy/container.js';
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