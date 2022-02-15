import React from 'react';

import EventInfo from '../../components/BuyTickets/EventInfo';

import { EventDataContainer } from '../../components/styles/BuyTickets.styled';

const EventData = ({ events }) => {
  return (
    <EventDataContainer>
      {events
        ? events.map((show) => <EventInfo show={show} key={show.id} />)
        : 'no show'}
      {/* <TicketsInfo /> */}
    </EventDataContainer>
  );
};

export default EventData;
