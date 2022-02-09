import React, { useState, useEffect, useContext } from 'react';
import axios from '../../util/axiosInstance';

import { SearchContext } from '../../hoc/MainRouter';

import Card from '../../components/Cards/Card';
import { Container } from '../../components/styles/Cards.styled';
import { useSearchParams } from 'react-router-dom';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  // const [results, setResults] = useContext(SearchContext);
  const { search } = useContext(SearchContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const getArtists = async () => {
    const name = searchParams.get('name');
    console.log(searchParams);
    const response = await axios.get(
      `/shows/attractions?attractionName=${name}`
    );
    console.log(response.data);
    setResults(response.data.payload.attractions);
  };

  useEffect(() => {
    getArtists();
  }, [searchParams]);

  return (
    <Container>
      {results
        ? results.map((event) => <Card event={event} key={event.id} />)
        : 'no shows'}
    </Container>
  );
};

export default SearchResults;
