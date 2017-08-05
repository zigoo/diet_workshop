import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import List from './List/component.js';
import meals from '../../../helpers/meals.js'
import Collapsible from '../Collapsible/Collapsible.js'
import './style.css';
  

class Search extends Component {
  constructor(){
  	super()
    this.state = {value: '', meals:meals, items:[]}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    let initialList = this.state.meals;
    let filteredList = '';
 
    this.setState({ value: e.target.value });
      filteredList = initialList.filter( item => item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1)
    this.setState({items: filteredList}) 
  }

  render() {
     
    return (
      <div className="Search">
        <Collapsible title='Szukaj'>       
        <div className="Utils_find-box">
          <Row>           
            <form>
              <FormGroup controlId="Utils_find">
                <FormControl bsSize="small" bsClass="form-control form-control_custom"
                  type="text" value={this.state.value}
                    placeholder="" onChange={this.handleChange} />
                  </FormGroup>
             </form>  
          </Row>
          <Row> 
            <List items={this.state.items} />
          </Row>
        </div>
        </Collapsible>
      </div>
    );
  }
}
 
export default Search;
