 
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import moment from 'moment';

import './style.css';

function sendEatenMeal(id=1,ateDate) {
  return {
    type:'eatenMeal',
    id,
    ateDate
  };
}

class Eaten extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      ate:false,
      status:''
    };
  }
  handleClick() {
    const ateDate = moment().format('DD/MM/YYYY');
    const {id} = this.props.selectedId;
    const {dispatch} = this.props;
   
    console.log(ateDate);
    
    this.setState({
      status: 'brawo,zjadles sniadanie '+id
    });
    dispatch(sendEatenMeal(id,ateDate));
  }

  render() {
    const ateDate = new Date().toLocaleString();
    return (
      <div className="eaten_grid">
       <div className="Eaten">
        <Button 
          bsStyle="default" className="desf" 
          bsSize="small" onClick={this.handleClick} >  
              eaten  
        </Button> 
        wybrany dzien: {ateDate}
        <div className="Status">
          {this.state.status}
        </div>  
      </div>
      </div>
    );
  }
}
 
function mapStateToProps(state) {
  let day = state.meal.selectedDate;
  if (day > 10) day = (Math.floor(Math.random()*10)); 
  
  return {
    selectedId: state.meal.meals.find(meal => ((meal.type === state.meal.selectedMeal) && (meal.day === day)) ),
    selectedDay: state.meal.selectedDate,
  };
}


Eaten.defaultProps = {
   
};
export default connect(mapStateToProps)(Eaten);
 
