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
import { GoBackButton } from '../../components/styles/Buttons/GoBack.styled';

//* IMPORT TOOLS_____________________________________
import { useSearchParams } from 'react-router-dom';

//* FUNCTION START___________________________________

const SearchResults = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [events, setEvents] = useState([]); // needs to be accessible from the Buttons/Buy.tsx to mainrouter
  const { setDataName } = useContext(SearchContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentEventSelected, setCurrentEventSelected] = useState(null);
  const [currentAttractionsSelected, setCurrentAttractionsSelected] = useState(null);

  //* Start: Search by Name (attractioname)_________________
  const getEvents = async () => {
    const name = searchParams.get('name');
    const response = await axios.get(
      `/shows/attractions?attractionName=${name}`
    );
    console.log('Payload info', response.data.payload);
    setResults(response.data.payload.attractions);
    // console.log('Das ist mein neuer Search', response.data.payload.attractions);
    console.log('this is my RESULTS', results);
    // setDataName(response.data.payload.attractions);
    return response.data.payload.attractions;
  };

  //* Start: Search by Event_ID'S (event_ids)_________________
  const getEventDetails = async (attraction) => {
    if (attraction) {
      if(attraction.id){
        const attractionIDs = attraction.id;
      const response = await axios.get(
        `/shows/eventdetails?attractionIDs=${attractionIDs}`
      );

      // setDataName(attractionIDs);
      setEvents(response.data.payload.events);
      }
      
    } else {
      navigate(`/noshows`, { replace: true });
    }
  };

  const getPricesByID = async (id) => {
    const response = await axios.get(`/shows/getprice?eventID=${id}`);
    return response.data.payload;
  };
  useEffect(() => {
    setCurrentEventSelected(null);
    setEvents(null);
    getEvents().then((attractions) => {
      
    });
  }, [searchParams]);

  //* End: Search by Event_ID'S (event_ids)____________________

  return (
    <>
      <Container>
        {results
          ? results.map((event) => (
              <Card
                onEventClicked={(event) => {
                  getEventDetails(event);
                }}
                event={event}
                key={event.id}
              />
            ))
          : 'no shows'}

        {currentEventSelected ? (
          <>
            <GoBackButton
              onClick={() => {
                setCurrentEventSelected(null);
              }}
            >
              Go Back
            </GoBackButton>

            <EventData show={currentEventSelected}></EventData>
          </>
        ) : (
          <Events
            events={events}
            onEventClicked={async (show) => {
              const showPrice = await getPricesByID(show.id);
              show.showPrice = showPrice;
              setCurrentEventSelected(show);
            }}
          />
        )}
      </Container>
    </>
  );
};

export default SearchResults;
