import React, { useState, useEffect, useContext } from 'react';
import axios from '../../util/axiosInstance';
import { useNavigate } from 'react-router-dom';

//* IMPORT CONTEXT__________________________________
import { SearchContext } from '../../hoc/MainRouter';

//* IMPORT COMPONENTS_______________________________
import Card from '../../components/Cards/Card';
import Events from '../../components/Cards/Events';
import EventData from '../../components/BuyTickets/EventData';

//* IMPORT STYLE_____________________________________
import { Container, EventCount } from '../../components/styles/Event.styled';

//* IMPORT TOOLS_____________________________________
import { useSearchParams } from 'react-router-dom';

//* FUNCTION START___________________________________

const SearchResults = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [events, setEvents] = useState([]);
  const { setDataName } = useContext(SearchContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentEventSelected, setCurrentEventSelected] = useState(null);

  //* Start: Search by Name (attractioname)_________________
  const getEvents = async () => {
    const name = searchParams.get('name');
    const response = await axios.get(
      `/shows/attractions?attractionName=${name}`
    );
    // console.log('Das ist mein neuer console.log', response.data.payload);
    setResults(response.data.payload.attractions);
    // console.log('Das ist mein neuer Search', response.data.payload.attractions);
    console.log('this is my RESULTS', results);
    // setDataName(response.data.payload.attractions);
    return response.data.payload.attractions;
  };

  //* Start: Search by Event_ID'S (event_ids)_________________
  const getEventDetails = async (attractions) => {
    if (attractions[0]) {
      const attractionIDs = attractions[0].id;
      const response = await axios.get(
        `/shows/events?attractionIDs=${attractionIDs}`
      );
      console.log('This is my RESULT-DATA', results);
      console.log('This is my EVENT-DATA', events);
      console.log('AttractionsID', attractionIDs);
      // setDataName(attractionIDs);
      setEvents(response.data.payload.events);
    } else {
      console.log('no attractions', attractions);
      navigate(`/noshows`, { replace: true });
    }
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

        {currentEventSelected ? (
          <>
            <button
              onClick={() => {
                setCurrentEventSelected(null);
              }}
            >
              Back
            </button>
            <EventData show={currentEventSelected}></EventData>
          </>
        ) : (
          <Events
            events={events}
            onEventClicked={(show) => {
              setCurrentEventSelected(show);
            }}
          />
        )}
      </Container>
    </>
  );
};

export default SearchResults;
