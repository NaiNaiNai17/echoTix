import React from 'react';

import Event from './Event';

import { EventsContainer } from '../../components/styles/Event.styled';

const Events = ({ events }) => {
  return (
    <EventsContainer>
      {events
        ? events.map((show) => <Event show={show} key={show.id} />)
        : 'no show'}
    </EventsContainer>
  );
};

export default Events;
