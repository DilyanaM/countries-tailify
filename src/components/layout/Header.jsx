import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Navbar, Nav, NavItem } from 'reactstrap';

const Header = () => (
  <div className="header">
    <Navbar color="light" light expand="md">
      <Nav className="ml-auto" navbar>
        <NavItem className="mr-5">
          <Link to="/">Landing</Link>
        </NavItem>
        <NavItem>
          <Link to="/continents">Continents</Link>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);

export default withRouter(Header);
