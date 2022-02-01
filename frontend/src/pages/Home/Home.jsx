import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Subhero from '../../components/Subhero/Subhero';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';
import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';

//* Import Styling

const Home = () => {
  return (
    <div>
      <Navbar />
      <Login />
      <Hero />
      <Subhero />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
