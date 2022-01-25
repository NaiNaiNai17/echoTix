import React from 'react';

import {
  NavLeft,
  NavSearch,
  NavTreeCount,
  Right,
  NavContainer,
  NavWrapper,
} from '../../components/styles/Navbar.styled';

const Navbar = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <NavLeft>Logo</NavLeft>
        <NavSearch>Search Icon</NavSearch>

        <Right>
          <NavTreeCount>Treecount</NavTreeCount>
        </Right>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
