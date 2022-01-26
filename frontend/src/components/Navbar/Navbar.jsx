import React from 'react';

import Badge from '@material-ui/core/Badge';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faSeedling,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import {
  NavLeft,
  NavCenter,
  NavRight,
  SearchContainer,
  NavTreecount,
  NavContainer,
  NavUserItem,
  NavWrapper,
  Input,
  ShoppingCartIcon,
} from '../../components/styles/Navbar.styled';

const Navbar = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <NavLeft>
          <img src="../assets/echoTix_Logo.png" alt="echotix-logo" />
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
          <NavUserItem>
            <FontAwesomeIcon icon={faUser} />

            <Badge badgeContent={4} color="primary">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Badge>
          </NavUserItem>
        </NavRight>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
