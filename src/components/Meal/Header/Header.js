import React, { Component } from 'react';
import MealBtn from './Button/Meal_btn';
import setSelected from './actions'
import { ButtonToolbar } from 'react-bootstrap';
import { connect } from 'react-redux';
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
    return (
      <div className="MealHeader">
        Jadlospis na dzisiaj <br />
        Wybierz posilek <br />
         <ButtonToolbar>
           {/* use hoc */}
           <MealBtn type={1} onClick={this.handleClick} />
           <MealBtn type={2} onClick={this.handleClick}/>
           <MealBtn type={3} onClick={this.handleClick}/>
           <MealBtn type={4} onClick={this.handleClick}/>
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
