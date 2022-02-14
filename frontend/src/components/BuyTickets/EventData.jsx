import React from 'react';

import EventInfo from '../../components/BuyTickets/EventInfo';
import TicketsInfo from '../../components/BuyTickets/TicketsInfo';
import InfoButtonContainer from '../../components/BuyTickets/InfoButton';

import { EventDataContainer } from '../../components/styles/BuyTickets.styled';

const EventData = ({ events }) => {
  return (
    <EventDataContainer>
      <InfoButtonContainer />
      {events
        ? events.map((show) => <EventInfo show={show} key={show.id} />)
        : 'no show'}
      <TicketsInfo />
    </EventDataContainer>
  );
};

export default EventData;
