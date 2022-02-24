import React, { useState } from 'react';

import NavbarToggle from './NavbarToggle';

import { BurgerMenue } from '../../components/styles/Navbar.styled';

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BurgerMenue open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerMenue>
      <NavbarToggle open={open} setOpen={setOpen} />
    </>
  );
};

export default Burger;
