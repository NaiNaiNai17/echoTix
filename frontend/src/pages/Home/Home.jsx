import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SearchDropUp from '../../components/SearchDropUp/SearchDropUp';
import Hero from '../../components/Hero/Hero';
import Subhero from '../../components/Subhero/Subhero';
import BackToLive from '../../components/BackToLive/BackToLive';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';

//* Import Styling

const Home = () => {
  return (
    <div>
      <Navbar />
      <SearchDropUp />
      <Hero />
      <Subhero />
      <BackToLive />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
