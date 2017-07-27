import React, { Component } from 'react';
import MealHeader from './Meal/Header/Header.js';
import MealDescripton from './Meal/Description/Description.js';
import Calendar from './Calendar/Calendar.js'
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
            <MealHeader />
          </Col>
         </div>
          <Col md={4} > 
            <MealDescripton />   
          </Col>
           <Col xsOffset={2}  md={3} >
            <Calendar /> 
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default App;
