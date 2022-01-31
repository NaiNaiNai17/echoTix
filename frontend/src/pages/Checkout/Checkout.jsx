import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import CheckoutComponent from '../../components/CheckoutComponent/CheckoutComponent';
import Footer from '../../components/Footer/Footer';

const Checkout = () => {
  return (
    <>
      <Navbar />
      <CheckoutComponent />
      <Footer />
    </>
  );
};

export default Checkout;
