 
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { sendEatenMeal } from '../../Utils/Actions/actions.js';
import SearchForId from '../../Utils/Hoc/Searchid.js';
import moment from 'moment';

import './style.css';

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
    const {id} = this.props.mealId;
    const {dispatch} = this.props;
   
    this.setState({
      status: 'product '+id+' eaten'
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
 
Eaten.defaultProps = {
   
};
export default SearchForId(Eaten);
 
