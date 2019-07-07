import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Navbar, Nav, NavItem } from 'reactstrap';

const Header = () => (
  <div className="header">
    <Navbar color="dark" dark expand="md">
      <span className="navbar-brand">
        <Link to="/">Tailify</Link>
      </span>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to="/continents">Continents</Link>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);

export default withRouter(Header);
