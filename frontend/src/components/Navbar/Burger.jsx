import React, { useState } from 'react';

import NavbarToggle from './NavbarToggle';

import { BurgerMenue } from '../../components/styles/Navbar.styled';

const Burger = ({ showModal, setShowModal }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BurgerMenue open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerMenue>
      <NavbarToggle
        open={open}
        setOpen={setOpen}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default Burger;
