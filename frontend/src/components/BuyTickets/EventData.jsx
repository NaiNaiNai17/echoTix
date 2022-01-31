import React from 'react';

import EventInfo from '../../components/BuyTickets/EventInfo';
import TicketsInfo from '../../components/BuyTickets/TicketsInfo';
import InfoButtonContainer from '../../components/BuyTickets/InfoButton';

import { EventDataContainer } from '../../components/styles/BuyTickets.styled';

const EventData = () => {
  return (
    <EventDataContainer>
      <InfoButtonContainer />
      <EventInfo />
      <TicketsInfo />
    </EventDataContainer>
  );
};

export default EventData;
