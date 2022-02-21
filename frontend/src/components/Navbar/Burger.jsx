import React, { useState } from 'react';

import { BurgerMenue } from '../../components/styles/Navbar.styled';

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <BurgerMenue open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </BurgerMenue>
  );
};

export default Burger;
