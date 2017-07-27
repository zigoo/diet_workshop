import React, { Component } from 'react';

import { ButtonToolbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import MealBtn from './Button/Meal_btn';
import setSelected from './actions'
import './style.css';

class MealHeader extends Component {
  constructor(){
   super()
   this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(typ) {
  	const { dispatch } = this.props;
  	dispatch(setSelected(typ));
  }

  render() {
    const btns_len = [{ key:1, type:1 }, { key:2, type:2 }, { key:3, type:3 }, { key:4, type:4 }]
    return (
      <div className="MealHeader">  
        {/* use hoc */}
        <ButtonToolbar>
          {btns_len.map(btn => <MealBtn type={btn.type} onClick={this.handleClick} key={btn.key} /> )}
        </ButtonToolbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selected: state.meals.selected 
  }
}
export default connect(mapStateToProps)(MealHeader);
