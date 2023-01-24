import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from './navItems';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <Wrapper>
        <div className="nav-center">
          <div className="nav-header">
            <Link className="nav-links-item" to="/">
              Logo
            </Link>
          </div>
          <ul className="nav-links">
            {navItems.map((itemLink) => {
              const { name, path } = itemLink;
              return (
                <li key={name}>
                  <Link className="nav-links-item" to={path}>
                    {name}{' '}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  height: 5rem;
  background-color: whitesmoke;
  width: 100%;
  .nav-center {
    flex: 1;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    background-color: rgba(117, 190, 218, 1);
  }
  .nav-header {
    flex: 1;
    color: white;
    align-self: center;
  }
  .nav-links {
    flex: 3;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    color: whitesmoke;
  }
  .nav-links-item {
    color: white;
  }
`;

export default Header;
