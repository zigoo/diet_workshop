/* eslint-disable */
import React, { Component } from 'react';
import MenuTop from './Menu/container.js';
import MealDescripton from './Meal/Description/container.js';
import Calendar from './Calendar/container.js';
import Search from './Utils/Search/component.js';
import MealCopy from './Meal/Description/MealCopy/container.js';
import StatsyBtn from './Statsy/button.js';
import './App.css';

import moment from 'moment';
import Perf from 'react-addons-perf';
 
class App extends Component {
  componentDidMount() {
    window.P = Perf;
 
    setTimeout(() => {
      Perf.start();
      setTimeout(() => {
        Perf.stop();
        const measurements = Perf.getLastMeasurements();
        Perf.printWasted(measurements);
      }, 30000);
    }, 5000);
  }

  render() {
    const initialDate = moment(new Date());
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
          <Calendar initialDate={initialDate} />
          <Search />
     
        </div>

        <div className="mobile-only">
          Switch to mobile/responsive view please
         </div>
      </div>
    );
  }
}

export default App;