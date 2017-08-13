/* eslint-disable */
import React, { Component } from 'react';
import List from './List/component.js';
import meals from '../../../helpers/meals.js';
import Collapsible from '../Collapsible/container.js';
import GetVisibility from '../../Utils/Hoc/GetVisibility.js';
import { browserHistory } from 'react-router';
import { Row, FormGroup, FormControl } from 'react-bootstrap';
import './style.css';

import {setVisible} from '../Actions/actions.js';

class Search extends Component {
  constructor(){
    super();
    this.state = {value: '', meals:meals, items:[], visible: true};
    this.handleChange = this.handleChange.bind(this);
    this.handleRoute = this.handleRoute.bind(this);
 
  }
  handleChange(e) {
    let initialList = this.state.meals;
    let filteredList = '';
 
    this.setState({ value: e.target.value });
    filteredList = initialList.filter( item => item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1);
    this.setState({items: filteredList}); 
  }
 
  handleRoute() {
    if (window.location.pathname !=='/meal') {
     browserHistory.push('/meal');
    }
  }

  handleVisbility() {
    dispatch(setVisible(1));
  }

  render() {
    const {visible} = this.props;
    const isHidden = (visible===1 || visible===0) ? '' : ' hidden';
    return (
      <div className={"Search"+isHidden} >
        {/*tooltip */}    
        <div id="click_holder" onClick={()=> this.handleVisbility}>
          <Collapsible title='Szukaj' id={1} onClick={this.handleRoute}>       
            <div className="Utils_find-box">
              <Row>           
                <form>
                  <FormGroup controlId="Utils_find">
                    <FormControl 
                      bsSize="small" bsClass="form-control form-control_custom"
                      type="text" value={this.state.value}
                      placeholder="" onChange={this.handleChange} autoFocus="true" />
                  </FormGroup>
                </form>  
              </Row>
              <Row className="search-row"> 
                <List items={this.state.items} />
              </Row>
            </div>
          </Collapsible>
        </div>
      </div>
    );
  }
}
 
export default GetVisibility(Search);
