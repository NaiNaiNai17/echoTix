import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faShoppingCart,
  faSeedling,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import {
  NavLeft,
  NavCenter,
  NavRight,
  SearchContainer,
  NavTreecount,
  NavContainer,
  NavUser,
  NavWrapper,
  Input,
} from '../../components/styles/Navbar.styled';

const Navbar = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <NavLeft>
          <img src="../assets/echoTix_Logo.png" alt="" />
        </NavLeft>
        <NavCenter>
          <SearchContainer>
            <Input />
            <FontAwesomeIcon icon={faSearch} />
          </SearchContainer>
        </NavCenter>

        <NavRight>
          <NavTreecount>
            <FontAwesomeIcon icon={faSeedling} />
          </NavTreecount>
          <NavUser>
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faShoppingCart} />
          </NavUser>
        </NavRight>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
