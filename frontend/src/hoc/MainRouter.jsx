import React from 'react';
import Home from '../pages/Home/Home';
import BuyTickets from '../pages/BuyTickets/BuyTickets';
import Checkout from '../pages/Checkout/Checkout';

const MainRouter = () => {
  return (
    <>
      <Home />
      <BuyTickets />
      <Checkout />
    </>
  );
};

export default MainRouter;
