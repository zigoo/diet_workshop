import React, { Component } from 'react';
import MealChoice from './Meal/MealChoice/container.js';
import MealDescripton from './Meal/Description/container.js';
import Calendar from './Calendar/container.js'
import Utils from './Utils/Search/component.js'
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
                  <Row>
                    <Calendar />  
                  </Row>
              </Col>
            </div>
              <Col md={6} > 
                <MealDescripton />   
              </Col>
              <Col md={3} >
                <Utils />
              </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
