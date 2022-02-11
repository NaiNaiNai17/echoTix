import React, { useState, useEffect, useContext } from 'react';
import axios from '../../util/axiosInstance';

//* IMPORT CONTEXT__________________________________
import { SearchContext } from '../../hoc/MainRouter';

//* IMPORT COMPONENTS_______________________________
import Card from '../../components/Cards/Card';
import Events from '../../components/Cards/Events';

//* IMPORT STYLE_____________________________________
import { Container, EventCount } from '../../components/styles/Event.styled';

//* IMPORT TOOLS_____________________________________
import { useSearchParams } from 'react-router-dom';

//* FUNCTION START___________________________________

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [events, setEvents] = useState([]);
  const { search } = useContext(SearchContext);

  const [searchParams, setSearchParams] = useSearchParams();

  //* Start: Search by Name (attractionName)_______________
  // const getArtists = async () => {
  //   const name = searchParams.get('name');
  //   console.log(searchParams);
  //   const response = await axios.get(
  //     `/shows/attractions?attractionName=${name}`
  //   );
  //   console.log('Hier response.data', response.data);
  //   setResults(response.data.payload.attractions);
  //   console.log('THIS IS MY RESULT', results);
  // };

  // useEffect(() => {
  //   getArtists();
  // }, [searchParams]);

  //* End: Search by Name (attractionName)____________________

  //* Start: Search by Event_ID'S (event_ids)_________________

  const getEvents = async () => {
    const name = searchParams.get('name');
    console.log(searchParams);
    const response = await axios.get(
      `/shows/attractions?attractionName=${name}`
    );
    console.log('Das ist mein neuer console.log', response.data.payload);
    setResults(response.data.payload.attractions);
    console.log('Das ist mein neuer Search', response.data.payload.attractions);
  };

  const getEventDetails = async () => {
    const attractionIDs = '12915';
    const response = await axios.get(
      `/shows/events?attractionIDs=${attractionIDs}`
    );
    console.log(response.data);
    console.log('EventData from single Show', response.data.payload.events);
    console.log(
      'EventData from single Show',
      response.data.payload.events[0].name
    );
    setEvents(response.data.payload.events);
  };

  useEffect(() => {
    getEventDetails();
    getEvents();
  }, [searchParams]);

  //* End: Search by Event_ID'S (event_ids)____________________

  return (
    <>
      <Container>
        {results
          ? results.map((event) => <Card event={event} key={event.id} />)
          : 'no shows'}
      </Container>
      <EventCount />
      <Events events={events} />
    </>
  );
};

export default SearchResults;
