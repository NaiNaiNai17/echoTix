import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BuyButton } from '../../components/styles/Buttons/Buy.styled';

const Buy = ({id, price, qty, venue, img, date, showName, city}) => {
  const navigate = useNavigate();

  const onBuyHandler = async () => { 
   
    
    const basketContents = JSON.parse(sessionStorage.getItem('basket')) || [];
    basketContents.push({id, price, qty, venue, img, date, showName, city});
    sessionStorage.setItem('basket', JSON.stringify(basketContents));
    //const response = await axios.post('/shows/checkout', { body: {eventID, ticketAmount, customerID} })
    navigate('/shoppingcart');
  }
  return <BuyButton onClick={(e) => onBuyHandler(e)}>Buy</BuyButton>;
};

export default Buy;
