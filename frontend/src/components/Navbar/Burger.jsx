import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../hoc/MainRouter';
import axios from '../../util/axiosInstance';
import Logout from '../Logout/Logout';

import Badge from '@material-ui/core/Badge';
import Logo from '../../assets/images/imageedit_12_2414757947.png';
import Login from '../Modal/Login';

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
      <NavbarToggle open={open} />
    </>
  );
};

export default Burger;
