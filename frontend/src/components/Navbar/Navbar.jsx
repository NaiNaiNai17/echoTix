import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../hoc/MainRouter';

import Badge from '@material-ui/core/Badge';
import Logo from '../../assets/images/echoTix_Logo.png';

import Login from '../Modal/Login';

//* Imported Icons from Fontawesome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faSeedling,
  faShoppingCart,
  faUser,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

//* Imported Components

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
  const [showModal, setShowModal] = useState(false);
  const [login, setLogin] = useState(true);
  const [search, setSearch] = useContext(SearchContext);
  const navigate = useNavigate();

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const example = () => {
    console.log('user focussed on input field');
  };

  const searchHandler = async () => {
    navigate(`/searchresult?name=${search}`, { replace: true });
  };

  return (
    <NavContainer fixed="top">
      <NavWrapper>
        <NavLeft>
          <img src={Logo} alt="echotix-logo" />
        </NavLeft>
        <NavCenter>
          <SearchContainer>
            <Input
              placeholder="Search For Shows"
              onChange={(e) => setSearch(e.target.value)}
              onFocus={example}
              value={search}
              size="40"
            />
            <FontAwesomeIcon
              icon={faSearch}
              onClick={searchHandler}
              style={{ cursor: 'pointer' }}
              size="2x"
            />
          </SearchContainer>
        </NavCenter>

        <NavRight>
          <NavTreecount>
            <FontAwesomeIcon icon={faSeedling} size="3x" />
          </NavTreecount>
          <NavUserItem>
            <FontAwesomeIcon
              onClick={openModal}
              icon={faUser}
              size="3x"
              style={{
                cursor: 'pointer',
                display: login ? 'block' : 'none',
                backgroundColor: 'transparent',
                border: 'none',
              }}
            />
            <FontAwesomeIcon
              icon={faSignOutAlt}
              size="3x"
              style={{
                cursor: 'pointer',
                display: login ? 'block' : 'none',
                backgroundColor: 'transparent',
                border: 'none',
              }}
            />

            <Login showModal={showModal} setShowModal={setShowModal} />

            <Badge badgeContent={4} color="primary">
              <FontAwesomeIcon
                style={{ cursor: 'pointer' }}
                icon={faShoppingCart}
                size="3x"
              />
            </Badge>
          </NavUserItem>
        </NavRight>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
