import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { navItems } from './NavItems';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <Container>
        <ul className="navbar-nav me-auto mb-2 mb-lg- m-auto">
          {navItems.map((navItem) => (
            <li className="nav-item" key={navItem.id}>
              <Link to={navItem.path} className=" nav-link active m-2 p-2">
                {' '}
                {navItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default Navigation;
