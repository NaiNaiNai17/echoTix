import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import Checkout from '../pages/Checkout/Checkout';
import Register from '../components/Register/Register';
import Footer from '../components/Footer/Footer';

import NoShows from '../pages/NoShows/NoShows';
import NotFound from '../pages/NotFound/NotFound';
import SearchResults from '../pages/SearchResults/SearchResults';

//* Use Context
export const SearchContext = createContext();

const MainRouter = () => {
  //* UseContext
  //* UseState
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  return (
    <Router>
      <SearchContext.Provider value={[results, setResults, search, setSearch]}>
        <Navbar />

        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/noshows" element={<NoShows />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/searchresult/*" element={<SearchResults />} />
          </Routes>
        </main>
        <Footer />
      </SearchContext.Provider>
    </Router>
  );
};

export default MainRouter;
