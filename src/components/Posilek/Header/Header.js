import React, { Component } from 'react';
import PosilekBtn from './Button/Posilek_btn';
import { ButtonToolbar } from 'react-bootstrap';
import * as actions from './actions';
import setSelected from './actions'
import { connect } from 'react-redux';
import './style.css';

class PosilekHeader extends Component {
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
      <div className="PosilekHeader">
        Jadlospis na dzisiaj <br />
        Wybierz posilek <br />
         <ButtonToolbar>
           {/* use hoc */}
           <PosilekBtn typ={1} onClick={this.handleClick} />
           <PosilekBtn typ={2} onClick={this.handleClick}/>
           <PosilekBtn typ={3} onClick={this.handleClick}/>
           <PosilekBtn typ={4} onClick={this.handleClick}/>
         </ButtonToolbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  	selected: state.posilki.selected
  }
}
export default connect(mapStateToProps)(PosilekHeader);
