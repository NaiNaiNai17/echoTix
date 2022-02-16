import React from 'react';

import EventInfo from '../../components/BuyTickets/EventInfo';

import { EventDataContainer } from '../../components/styles/BuyTickets.styled';

const EventData = ({ show }) => {
  return (
    <EventDataContainer>
      <EventInfo show={show} key={show.id} />
    </EventDataContainer>
  );
};

export default EventData;
