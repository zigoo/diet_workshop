import React, { Component } from 'react';
import './style.css';

class MealDescription extends Component {
  render() {
    const {desc, name, hint } = this.props.meal !== undefined ? this.props.meal : '';
    const mealsQuantity = this.props.meals.length;
    return (
      <div>
        <div className="MealDescription">
          {/* add r-bootstrap tooltips */}
          <h3>{name}</h3> <br />
              {desc} <br />
          <p>
              {hint}
          </p>
         Ilość przepisów: {mealsQuantity}
        </div>
      </div>
    );
  }
}
 
export default MealDescription;
 