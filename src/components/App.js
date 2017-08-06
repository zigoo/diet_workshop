import React, { Component } from 'react';
import MenuTop from './Menu/MenuTop.js';
import MenuLeft from './Menu/MenuLeft/container.js';
import MealDescripton from './Meal/Description/container.js';
import Info from './Utils/Info/Info.js';
import Calendar from './Calendar/container.js';
import Search from './Utils/Search/component.js';
import MealCopy from './Meal/Description/MealCopy/container.js';
import MealShare from './Meal/Description/MealShare/component.js';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid fluid={false}>
          <Row>
            <Col md={12}>
              <MenuTop />
            </Col>
          </Row>
          <Row>  
            <Col md={2} className="col-custom" >
              <MenuLeft />
            </Col>
            <Col md={8} >
              <MealDescripton />
              <Info />
            </Col>
            <Col md={2} className="col-custom">
              <Search />    
              <Calendar />
              <MealCopy />  
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;