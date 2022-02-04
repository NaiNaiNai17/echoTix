import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import Checkout from '../pages/Checkout/Checkout';
import Register from '../components/Register/Register';
import Footer from '../components/Footer/Footer';
// import BuyTickets from '../pages/BuyTickets/BuyTickets';
// import Checkout from '../pages/Checkout/Checkout';

const MainRouter = () => {
  // const [showModal, setShowModal] = useState(false);
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default MainRouter;
