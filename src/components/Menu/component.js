import React, { Component } from 'react';
import Parser from 'html-react-parser';
import { Navbar, MenuItem, Nav, NavDropdown } from 'react-bootstrap';
import './styles.css';


class MenuTop extends Component {
  constructor() {
    super();
  this.expandSearch = this.expandSearch.bind(this);
  }
  
  invokeMealType(typ) {
    const { setSelected } = this.props;
    setSelected(typ);
  }

  expandSearch(id) {
    const {isExpanded, setVisible, setCollapse} = this.props;

    switch (id) {
     case 1:
       if (isExpanded[1]) {
         setVisible(1);
         setCollapse(1, false);
         setCollapse(2, true);
       } else if (!isExpanded[1]){
         setVisible(0);
         setCollapse(1,true);
       }
        break
     case 2:
       if (isExpanded[2]) {
         setVisible(2);
         setCollapse(2, false);
         setCollapse(1, true);
       } else if (!isExpanded[2]){
         setVisible(0);
         setCollapse(2,true);
       }
        break
     default:
    }
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
                
                  <MenuItem eventKey={1.1} onClick={()=> this.invokeMealType(1)} >Sniadanie</MenuItem>
                  <MenuItem eventKey={1.2} onClick={()=> this.invokeMealType(2)} >Drugie sniadanie</MenuItem>
                  <MenuItem eventKey={1.3} onClick={()=> this.invokeMealType(3)} >Obiad</MenuItem>
                  <MenuItem eventKey={1.4} onClick={()=> this.invokeMealType(4)} >Kolacja</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavDropdown eventKey={2} title={avatarUrl} id="dropdown2" className="dropdown_avatar" noCaret>
                  <MenuItem eventKey={2.1}>Statystyki</MenuItem>
                  <MenuItem eventKey={2.2} onClick={()=> this.expandSearch(1)} >Szukaj</MenuItem>
                  <MenuItem eventKey={2.3} onClick={()=> this.expandSearch(2)} >Kalendarz</MenuItem>
                <MenuItem divider />
                  <MenuItem eventKey={2.4}>wyloguj</MenuItem>
              </NavDropdown>
            </Nav>   
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MenuTop;