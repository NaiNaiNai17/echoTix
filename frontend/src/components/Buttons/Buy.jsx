import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BuyButton } from '../../components/styles/Buttons/Buy.styled';

const Buy = () => {
  const navigate = useNavigate();

  function onBuyHandler() {
    navigate('/shoppingcart');
  }
  return <BuyButton onClick={(e) => onBuyHandler(e)}>Buy</BuyButton>;
};

export default Buy;
