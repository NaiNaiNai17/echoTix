import React from 'react';

import { ToggleContainer } from '../styles/Navbar.styled';

const NavbarToggle = ({ open }) => {
  return (
    <ToggleContainer open={open}>
      <ul>
        <li>Home</li>
        <li>Login</li>
        <li>Shopping Cart</li>
        <li>Impressum</li>
      </ul>
    </ToggleContainer>
  );
};

export default NavbarToggle;
