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

  function impressum() {
    navigate('/impressum');
  }

  return (
    <>
      {open ? (
        <ToggleContainer open={open}>
          <ul>
            <li onClick={goHome} style={{ cursor: 'pointer' }}>
              Home
            </li>

            <li onClick={login} style={{ cursor: 'pointer' }}>
              Login
            </li>

            <li onClick={register} style={{ cursor: 'pointer' }}>
              Register
            </li>

            <li onClick={shoppingCart} style={{ cursor: 'pointer' }}>
              Shopping Cart
            </li>

            <li onClick={impressum} style={{ cursor: 'pointer' }}>
              Impressum
            </li>
          </ul>
        </ToggleContainer>
      ) : null}
    </>
  );
};

export default NavbarToggle;
