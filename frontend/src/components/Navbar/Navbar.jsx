import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../hoc/MainRouter';

import Badge from '@material-ui/core/Badge';
import Logo from '../../assets/images/imageedit_12_2414757947.png';

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
  TreecountNumber,
  NavTreecount,
  NavContainer,
  NavUserItem,
  NavWrapper,
  Input,
} from '../../components/styles/Navbar.styled';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [login, setLogin] = useState(true);
  const { search, setSearch } = useContext(SearchContext);
  const navigate = useNavigate();

  //* Opens the Login-Modal
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  //* Console: Showing if the input-field is active
  const example = () => {
    console.log('user focussed on input field');
  };
  //* Trigger the Search and navigate to seachresult-page
  const searchHandler = async () => {
    navigate(`/searchresult?name=${search}`, { replace: true });
  };
  const checkoutHandler = () =>{
    navigate('/checkout')
  }
  //* Going Home

  function goHome() {
    navigate('/');
  }

  return (
    <NavContainer fixed="top">
      <NavWrapper>
        <NavLeft src={Logo} alt="echotix-logo" onClick={goHome}></NavLeft>
        <NavCenter>
          <SearchContainer>
            <Input
              placeholder="Search For Shows"
              onChange={(e) => setSearch(e.target.value)}
              onFocus={example}
              // value={search}
              size="30"
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
            <TreecountNumber>43.333</TreecountNumber>
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
                paddingRight: '30px',
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
                paddingRight: '30px',
              }}
            />

            <FontAwesomeIcon
              onClick={checkoutHandler}
              style={{ cursor: 'pointer' }}
              icon={faShoppingCart}
              size="3x"
            />
            <Badge
              badgeContent={4}
              color="primary"
              badgeStyle={{ backgroundColor: '#00AFD7' }}
            ></Badge>
            <Login showModal={showModal} setShowModal={setShowModal} />
          </NavUserItem>
        </NavRight>
        
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
