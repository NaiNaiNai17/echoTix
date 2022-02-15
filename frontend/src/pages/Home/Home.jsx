import React, { useState } from 'react';
import Hero from '../../components/Hero/Hero';
import Subhero from '../../components/Subhero/Subhero';
import BackToLive from '../../components/BackToLive/BackToLive';
import DefaultCards from '../../components/Cards/DefaultCards';

//* Import Styling

const Home = () => {
  return (
    <div>
      <Hero />
      <Subhero />
      <BackToLive />
      <DefaultCards />
    </div>
  );
};

export default Home;
