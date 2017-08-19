import React, { Component } from 'react';
import './style.css';

class MealDescription extends Component {
  render() {
    const mealType = ['sniadanie', 'drugie sniadanie', 'obiad', 'kolacja'];
    const {desc, name, hint, type } = this.props.mealId;
    return (
      <div className="description_grid">
        <div className="MealDescription">
          <div className="meal-desc">
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
      </div>
    );
  }
}
 
export default MealDescription;
 