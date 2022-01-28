import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Cards from '../../components/Cards/Cards';

//* Import Styling

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
    </div>
  );
};

export default Home;
