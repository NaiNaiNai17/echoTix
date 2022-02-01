import React from 'react';
import Hero from '../../components/Hero/Hero';
import Subhero from '../../components/Subhero/Subhero';
import BackToLive from '../../components/BackToLive/BackToLive';
import Cards from '../../components/Cards/Cards';

//* Import Styling

const Home = () => {
  return (
    <div>
      <Hero />
      <Subhero />
      <BackToLive />
      <Cards />
    </div>
  );
};

export default Home;
