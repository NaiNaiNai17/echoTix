import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//* IMPORT PAGES________________________________
import Home from '../pages/Home/Home';
import Checkout from '../pages/Checkout/Checkout';
import NoShows from '../pages/NoShows/NoShows';
import NotFound from '../pages/NotFound/NotFound';
import SearchResults from '../pages/SearchResults/SearchResults';
import Impressum from '../pages/Impressum/Impressum';
import Login from '../pages/Login/Login';

//* IMPORT COMPONENTS____________________________
import Register from '../components/Register/Register';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import EventInfo from '../components/BuyTickets/EventInfo';
import Logout from '../components/Logout/Logout';

//* Use Context
export const SearchContext = createContext();

const MainRouter = () => {
  //* UseContext
  //* UseState
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [dataName, setDataName] = useState('');
  const [counter, setCounter] = useState('');
  const [customer, setCustomer] = useState({ id: '' });
  const [loggedIn, setLoggedIn] = useState(false);

  console.log('this is my dataName', dataName);

  return (
    <Router>
      <SearchContext.Provider
        value={{
          results,
          setResults,
          search,
          setSearch,
          dataName,
          setDataName,
          setCounter,
          loggedIn,
          setLoggedIn,
        }}
      >
        <Navbar />

        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/noshows" element={<NoShows />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/searchresult/*" element={<SearchResults />} />
            <Route path="/eventdetail" element={<EventInfo />} />
            <Route path="/shoppingcart" element={<Checkout />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>
        <Footer />
      </SearchContext.Provider>
    </Router>
  );
};

export default MainRouter;
