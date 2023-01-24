import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
const items = [
  {
    name: 'Home',
    path: '/',
    id: 1
  },
  {
    name: 'Recipes',
    path: '/recipes',
    id: 2
  }
];

const Navbar = () => {
  return (
    <Nav className="justify-content-center align-items-center">
      <Link className="mr-4" to="/">
        Logo
      </Link>
      <ul className="nav justify-content-center  ">
        {items.map((i) => (
          <li key={i.id} className="nav-item nav-link">
            <Link className="nav-link" to={i.path}>
              {i.name}
            </Link>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

export default Navbar;
