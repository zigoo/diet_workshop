import React, { Component } from 'react';
import MealChoice from './Meal/MealChoice/container.js';
import MealDescripton from './Meal/Description/container.js';
import Calendar from './Calendar/container.js'
import { Grid, Row, Col } from 'react-bootstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <div className="meal_header-margin">
            <Col md={3} >
              <MealChoice />
            </Col>
            </div>
            <Col md={5} > 
              <MealDescripton />   
            </Col>
            <Col xsOffset={1}  md={3} >
              <Calendar  /> 
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
