import React, { useState, useEffect, useContext } from 'react';
import axios from '../../util/axiosInstance';

//* IMPORT CONTEXT__________________________________
import { SearchContext } from '../../hoc/MainRouter';

//* IMPORT COMPONENTS_______________________________
import Card from '../../components/Cards/Card';
import Events from '../../components/Cards/Events';
import EventInfo from '../../components/BuyTickets/EventInfo';
import EventData from '../../components/BuyTickets/EventData';

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

  //* Start: Search by Name (attractioname)_________________
  const getEvents = async () => {
    const name = searchParams.get('name');
    console.log(searchParams);
    const response = await axios.get(
      `/shows/attractions?attractionName=${name}`
    );
    console.log('Das ist mein neuer console.log', response.data.payload);
    setResults(response.data.payload.attractions);
    console.log('Das ist mein neuer Search', response.data.payload.attractions);
    return response.data.payload.attractions;
  };

  //* Start: Search by Event_ID'S (event_ids)_________________
  const getEventDetails = async (attractions) => {
    const attractionIDs = attractions[0].id;
    const response = await axios.get(
      `/shows/events?attractionIDs=${attractionIDs}`
    );
    console.log('This is my RESULT-DATA', results);
    console.log('This is my EVENT-DATA', events);
    console.log('AttractionsID', attractions[0].event);

    setEvents(response.data.payload.events);
  };

  useEffect(() => {
    getEvents().then((attractions) => {
      getEventDetails(attractions);
    });
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
      <EventData events={events}></EventData>
    </>
  );
};

export default SearchResults;
