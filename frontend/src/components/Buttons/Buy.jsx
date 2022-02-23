import React from 'react';
import axios from '../../util/axiosInstance'
import { useNavigate } from 'react-router-dom';

import { BuyButton } from '../../components/styles/Buttons/Buy.styled';

const Buy = ({id, price, qty, venue, img, showDate}) => {
  const navigate = useNavigate();

  const onBuyHandler = async () => { 
   
    
    const basketContents = JSON.parse(sessionStorage.getItem('basket')) || [];
    basketContents.push({id, price, qty, venue, img});
    sessionStorage.setItem('basket', JSON.stringify(basketContents));
    //const response = await axios.post('/shows/checkout', { body: {eventID, ticketAmount, customerID} })
    navigate('/shoppingcart');
  }
  return <BuyButton onClick={(e) => onBuyHandler(e)}>Buy</BuyButton>;
};

export default Buy;
