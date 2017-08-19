/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuTop from './Menu/container.js';
import MealDescripton from './Meal/Description/container.js';
import StatsyBtn from './Statsy/button.js';
import Calendar from './Calendar/container.js';
import Search from './Utils/Search/component.js';
//import MealCopy from './Meal/Description/MealCopy/container.js';
import moment from 'moment';
import './App.css';

 
class App extends Component {
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
        {this.props.authenticated &&
        <div>
          <StatsyBtn />
          <Calendar initialDate={initialDate} />
          <Search />
        </div>
        }
        </div>

        <div className="mobile-only">
          Switch to mobile/responsive view please
         </div>
      </div>
    );
  }
}

function mapStateToProps(state,props) {
  return { 
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(App);

/*
import Perf from 'react-addons-perf';

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
*/