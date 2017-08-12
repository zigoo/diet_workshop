/* eslint-disable */
import React, { Component } from 'react';
import List from './List/component.js';
import meals from '../../../helpers/meals.js';
import Collapsible from '../Collapsible/Collapsible.js';
import { browserHistory } from 'react-router';
import { Row, FormGroup, FormControl } from 'react-bootstrap';
import './style.css';
  

class Search extends Component {
  constructor(){
    super();
    this.state = {value: '', meals:meals, items:[], visible: true};
    this.handleChange = this.handleChange.bind(this);
 
  }
  handleChange(e) {
    let initialList = this.state.meals;
    let filteredList = '';
 
    this.setState({ value: e.target.value });
    filteredList = initialList.filter( item => item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1);
    this.setState({items: filteredList}); 
  }
 
  handleRoute() {
   // this.setState({visible: !this.state.visible});
    let x = window.location.pathname;

    if (x !=='/meal') {
     browserHistory.push('/meal');
    }
  }

  render() {
   /* const visibleVar = this.state.visible ? '' : 'not';
    const tooltip = ( 
      <div className={"visible "+ visibleVar} >
        <Tooltip placement="left" className="in" id="one">
             rozwiń i znajdź przepis
        </Tooltip>
      </div>
    );*/

    return (
      <div className="Search">
        {/*tooltip */}    
        <div id="click_holder" onClick={this.handleRoute}>
          <Collapsible title='Szukaj'>       
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
 
export default Search;
