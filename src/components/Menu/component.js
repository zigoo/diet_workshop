import React, { Component } from 'react';
import Parser from 'html-react-parser';
import { Navbar, MenuItem, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import setSelected, { setCollapse } from '../Utils/Actions/actions.js';
import './styles.css';


class MenuTop extends Component {
  constructor() {
    super();
    this.expandSearch = this.expandSearch.bind(this);
    this.invokeMealType = this.invokeMealType.bind(this);
  }
  
  invokeMealType(typ) {
    const {selectedId, dispatch} = this.props;
    dispatch(setSelected(typ,selectedId));
  }

  expandSearch(id) {
    const {isExpanded, dispatch} = this.props;
 
    dispatch(setCollapse(id, !isExpanded[id]));
  }

  render() {
    const avatarUrl = Parser('<img className="img-responsive" src="https://image.ibb.co/eyohzv/php_Guma_Gh_c1_PM.jpg" alt="avatar"></img>');
    return (
      <div>
        <Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Diet workshop</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>   
            <Nav>
              <NavDropdown eventKey={1} title="Posilek" id="dropdown" className="dropdown_meal">
                <LinkContainer to="">
                  <MenuItem eventKey={1.1} onClick={()=> this.invokeMealType(1)} >Sniadanie</MenuItem>
                </LinkContainer>
                <LinkContainer to="">
                  <MenuItem eventKey={1.2} onClick={()=> this.invokeMealType(2)} >Drugie sniadanie</MenuItem>
                </LinkContainer>
                <LinkContainer to="">
                  <MenuItem eventKey={1.3} onClick={()=> this.invokeMealType(3)} >Obiad</MenuItem>
                </LinkContainer>
                <LinkContainer to="">
                  <MenuItem eventKey={1.4} onClick={()=> this.invokeMealType(4)} >Kolacja</MenuItem>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavDropdown eventKey={2} title={avatarUrl} id="dropdown2" className="dropdown_avatar" noCaret>
                <LinkContainer to="/statsy">
                  <MenuItem eventKey={2.1}>Statystyki</MenuItem>
                </LinkContainer>
                <LinkContainer to="">
                  <MenuItem eventKey={2.2} onClick={()=> this.expandSearch(1)} >Szukaj</MenuItem>
                </LinkContainer>
                 <LinkContainer to="/">
                  <MenuItem eventKey={2.3} onClick={()=> this.expandSearch(2)} >Kalendarz</MenuItem>
                </LinkContainer>
                <MenuItem divider />
                <LinkContainer to="/zxc">
                  <MenuItem eventKey={2.4}>wyloguj</MenuItem>
                </LinkContainer>
              </NavDropdown>
            </Nav>   
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MenuTop;