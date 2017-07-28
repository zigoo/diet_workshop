import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Grid, Row, Col } from 'react-bootstrap';
import './style.css';

class MealDescription extends Component {
  render() {
    const  {desc, name, hint} = this.props.meal;  
    return (
      <div>
            <div className="MealDescription">
               {/* add r-bootstrap tooltips */}
             <h3>{name}</h3> <br />
               {desc} <br />
             <p>
               {hint}
             </p>
            </div>
 
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    meal: state.meals.find(meal => meal.id === state.selected)
  }
}
export default connect(mapStateToProps)(MealDescription);
 