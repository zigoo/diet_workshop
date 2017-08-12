import React, { Component } from 'react';
//import Parser from 'html-react-parser';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, MenuItem, Nav, NavDropdown} from 'react-bootstrap';
import './styles.css';

class MenuTop extends Component {
  render() {
   // const avatarUrl = Parser('<div><img className="img-responsive img-circle" src="https://image.ibb.co/fJ946a/avatar.png" alt="avatar"> </img></div>');
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
              <NavDropdown eventKey={1} title="Posilek" id="dropdown" className="dropdownc">
                <LinkContainer to="/sniadanie">
                  <MenuItem eventKey={1.1}>Sniadanie</MenuItem>
                </LinkContainer>
                <LinkContainer to="/drugiesniadanie">
                  <MenuItem eventKey={1.2}>Drugie sniadanie</MenuItem>
                </LinkContainer>
                <LinkContainer to="/obiad">
                  <MenuItem eventKey={1.3}>Obiad</MenuItem>
                </LinkContainer>
                <LinkContainer to="/kolacja">
                  <MenuItem eventKey={1.3}>Kolacja</MenuItem>
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
            /*<Nav pullRight>
              <NavDropdown eventKey={4} title={avatarUrl} id="dropdown2" className="nopadding" noCaret>
                <MenuItem eventKey={4.1}>Action</MenuItem>
                <MenuItem eventKey={4.2}>Another action</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={4.3}>wyloguj</MenuItem>
              </NavDropdown>
            </Nav>*/