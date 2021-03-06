import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext, SearchContext } from '../../hoc/MainRouter';


import Badge from '@material-ui/core/Badge';
import Logo from '../../assets/images/imageedit_12_2414757947.png';
import Login from '../Modal/Login';

//* Import Component
import Burger from './Burger';

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
  const { loggedIn, search, setSearch } = useContext(SearchContext);
  const { cartQty, setCartQty,treeCount, setTreeCount } = useContext(CartContext);
  const [isShown, setIsShown] = useState(false)

  const navigate = useNavigate();


  //* Opens the Login-Modal
  const openModal = () => {
    // setShowModal((prev) => !prev);
    setShowModal(!showModal);
  };

  //* Console: Showing if the input-field is active
  const example = () => {
    console.log('user focussed on input field');
  };
  //* Trigger the Search and navigate to seachresult-page
  const searchHandler = async () => {
    navigate(`/searchresult?name=${search}`, { replace: true });
  };
  const checkoutHandler = () => {
    navigate('/checkout');
  };
  //* Going Home

  function goHome() {
    navigate('/');
  }


  return (
    <NavContainer>
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
              style={{ cursor: 'pointer', color: 'grey' }}
              size="2x"
            />
          </SearchContainer>
        </NavCenter>

        <NavRight>
          <NavTreecount style={{paddingLeft:'10%'}} >
          
            
            <FontAwesomeIcon icon={faSeedling} size="3x" />
            <Badge 
            onMouseEnter={()=> setIsShown(true)}
            onMouseLeave={()=> setIsShown(false)}
              badgeContent={treeCount.toFixed(2)}
              color="primary"
              badgeStyle={{ backgroundColor: '#00AFD7' }}
            ></Badge>
            {isShown && (
              <div style={{paddingLeft:'10%'}} > {treeCount.toFixed(2)} trees will be planted with your purchase</div>
            )}
          </NavTreecount>
          
          <NavUserItem>
            <FontAwesomeIcon
              onClick={openModal}
              icon={faUser}
              size="3x"
              style={{
                cursor: 'pointer',

                display: loggedIn ? 'none' : 'block',

                backgroundColor: 'transparent',
                border: 'none',
                paddingRight: '30px',
              }}
            />
            <div>
              <FontAwesomeIcon
                onClick={() => navigate('/logout')}
                icon={faSignOutAlt}
                size="3x"
                style={{
                  cursor: 'pointer',
                  display: loggedIn ? 'block' : 'none',

                  backgroundColor: 'transparent',
                  border: 'none',
                  paddingRight: '30px',
                }}
              />
            </div>

            <FontAwesomeIcon
              onClick={checkoutHandler}
              style={{ cursor: 'pointer' }}
              icon={faShoppingCart}
              size="3x"
            />
            <Badge
              badgeContent={cartQty}
              color="primary"
              badgeStyle={{ backgroundColor: '#00AFD7' }}
            ></Badge>
            <Login showModal={showModal} setShowModal={setShowModal} />
          </NavUserItem>
        </NavRight>
        <Burger showModal={showModal} setShowModal={setShowModal} />
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
