import React, { useState, useEffect } from 'react';
import Card from '../../components/Cards/Card';

import { Container } from '../../components/styles/Event.styled';
import axios from '../../util/axiosInstance';

const Cards = ({ events }) => {
  const [results, setResults] = useState([]);

  const getArtists = async () => {
    const response = await axios.get(
      '/shows/attractions?attractionName=coldplay'
    );
    console.log(response.data);
    setResults(response.data.payload.attractions);
  };

  useEffect(() => {
    getArtists();
  }, []);

  return (
    <Container>
      {results
        ? results.map((event) => <Card event={event} key={event.id} />)
        : 'no shows'}
    </Container>
    
  );
};

export default Cards;
