import React from 'react';
import Badge from '@material-ui/core/Badge';
import Logo from '../../assets/images/echoTix_Logo.png';

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
} from '../../components/styles/Navbar.styled';

const Navbar = () => {
  return (
    <NavContainer fixed="top">
      <NavWrapper>
        <NavLeft>
          <img src={Logo} alt="echotix-logo" />
        </NavLeft>
        <NavCenter>
          <SearchContainer>
            <Input />
            <FontAwesomeIcon icon={faSearch} />
          </SearchContainer>
        </NavCenter>

        <NavRight>
          <NavTreecount>
            <FontAwesomeIcon icon={faSeedling} size="2x" />
          </NavTreecount>
          <NavUserItem>
            <FontAwesomeIcon icon={faUser} size="2x" />

            <Badge badgeContent={4} color="primary" font-size="lg">
              <FontAwesomeIcon icon={faShoppingCart} size="2x" />
            </Badge>
          </NavUserItem>
        </NavRight>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
