import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';

//* Import Styling

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
