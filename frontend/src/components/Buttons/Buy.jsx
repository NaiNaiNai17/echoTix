import React from 'react';
import axios from '../../util/axiosInstance'
import { useNavigate } from 'react-router-dom';

import { BuyButton } from '../../components/styles/Buttons/Buy.styled';

const Buy = () => {
  const navigate = useNavigate();

  const onBuyHandler = async () => { // addToCart
    const eventID = 'somewhere in the app state';
    const ticketAmount = 0
    const customerID = '';
    
    const response = await axios.post('/shows/checkout', { body: {eventID, ticketAmount, customerID} })
    navigate('/shoppingcart');
  }
  return <BuyButton onClick={(e) => onBuyHandler(e)}>Buy</BuyButton>;
};

export default Buy;
