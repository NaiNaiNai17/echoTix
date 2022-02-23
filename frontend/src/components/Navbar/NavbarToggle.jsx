import React from 'react';

import { ToggleContainer } from '../styles/Navbar.styled';

const NavbarToggle = ({ open }) => {
  return (
    <>
      {open ? (
        <ToggleContainer open={open}>
          <ul>
            <li>Home</li>
            <li>Login</li>
            <li>Shopping Cart</li>
            <li>Impressum</li>
          </ul>
        </ToggleContainer>
      ) : null}
    </>
  );
};

export default NavbarToggle;
