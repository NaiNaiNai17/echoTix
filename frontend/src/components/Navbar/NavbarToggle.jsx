import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ToggleContainer } from '../styles/Navbar.styled';

const NavbarToggle = ({ open }) => {
  const navigate = useNavigate();
  function goHome() {
    navigate('/');
  }

  function login() {
    navigate('/login');
  }

  function register() {
    navigate('/register');
  }

  function shoppingCart() {
    navigate('/shoppingcart');
  }

  return (
    <>
      {open ? (
        <ToggleContainer open={open}>
          <ul>
            <a href="">
              <li onClick={goHome} style={{ cursor: 'pointer' }}>
                Home
              </li>
            </a>
            <a href="">
              <li onClick={register} style={{ cursor: 'pointer' }}>
                Login
              </li>
            </a>
            <a href="">
              <li onClick={register} style={{ cursor: 'pointer' }}>
                Register
              </li>
            </a>

            <a href="">
              <li>Shopping Cart</li>
            </a>
            <a href="">
              <li>Impressum</li>
            </a>
          </ul>
        </ToggleContainer>
      ) : null}
    </>
  );
};

export default NavbarToggle;
