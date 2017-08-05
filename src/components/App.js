import React, { Component } from 'react';
import MealChoice from './Meal/MealChoice/container.js';
import MealDescripton from './Meal/Description/container.js';
import Calendar from './Calendar/container.js'
import Search from './Utils/Search/component.js'
import MealCopy from './Meal/Description/MealCopy/container.js';
import MealShare from './Meal/Description/MealShare/component.js';

import { Grid, Row, Col } from 'react-bootstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid fluid={true}>
          <Row className="show-grid">
            <div className="meal_header-margin">
              <Col md={3} >
                <MealChoice />   
              </Col>
            </div>
            <Col md={6} > 
              <MealDescripton /> 
            </Col>
            <Col md={3} >
              <Search />    
              <Calendar />       
            </Col>
          </Row>
              <div id="footer">

              <Row>  
                 <Col md={1}>
                   <MealCopy />
                 </Col>
                 <Col xsOffset={1} md={1} >
                   <MealShare />
                 </Col>
                 
              </Row>
 
              </div>
        </Grid>
      </div>
    );
  }
}

export default App;
