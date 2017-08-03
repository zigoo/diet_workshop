import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import List from './List/component.js';
import meals from '../../../helpers/meals.js'
import './style.css';
  

class Utils extends Component {
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
                                .map(x=> x.name);
    this.setState({items: filteredList}) 
  }

  render() {
     
    return (
      <div className="Utils">
        <div className="Utils_find-box">
          <Row>
            <Col xsOffset={3} md={6}> 
              <form>
                <FormGroup controlId="Utils_find">
                  <FormControl
                    type="text" value={this.state.value}
                     placeholder="szukaj" onChange={this.handleChange} />
                  </FormGroup>
              </form>
            </Col> 
          </Row>
          <Row> 
            <List items={this.state.items} />
          </Row>
        </div>
      </div>
    );
  }
}
 
export default Utils;
