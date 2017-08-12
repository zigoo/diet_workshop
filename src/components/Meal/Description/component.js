import React, { Component } from 'react';
import Eaten from '../Eaten/component.js';
import './style.css';

class MealDescription extends Component {
  render() {
    const mealType = ['sniadanie', 'pozne sniadanie', 'obiad', 'kolacja'];
   // const {desc, name, hint, type } = (this.props.MealId !== 0 || this.props.MealId !== undefined) ? this.props.MealId : '';
    const {desc, name, hint, type } = this.props.mealId;
   
    return (
    <div>
      <div className="description_grid">
        <div className="meal-desc">
          <div className="MealDescription">
            <div className="MealDescription-title">
              <h3>{name}</h3> 
               {mealType[type-1]}
            </div> <br />
                {desc} <br />
            <div className="MealDescription-hint">
              <p>
               {hint}
              </p>
            </div>
          </div>
        </div>
        <div className="meal-eaten">
          <Eaten />
        </div>
      </div>
    </div>
    );
  }
}
 
export default MealDescription;
 