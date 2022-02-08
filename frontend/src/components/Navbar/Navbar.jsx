import React, { useState, useEffect } from 'react';
import axios from '../../util/axiosInstance';
import { NavLink } from 'react-router-dom';

import Badge from '@material-ui/core/Badge';
import Logo from '../../assets/images/echoTix_Logo.png';

import Login from '../Modal/Login';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faSeedling,
  faShoppingCart,
  faUser,
  faSignOutAlt,
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
  const [showModal, setShowModal] = useState(false);
  const [login, setLogin] = useState(true);
  const [search, setSearch] = useState('');

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const example = () => {
    console.log('user focussed on input field');
  };

  const searchHandler = async () => {
    try {
      const response = await axios.get(
        `/shows/attractions?attractionName=${search}`
      );
      console.log('This is my response from Search', response.data);
      console.log(search);
      console.log(response.name);
    } catch (error) {
      console.log("Can't get Data", error.message);
    }
  };

  useEffect(() => {
    searchHandler();
  }, [search]);

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
            />
            <FontAwesomeIcon
              icon={faSearch}
              onClick={searchHandler}
              style={{ cursor: 'pointer' }}
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
