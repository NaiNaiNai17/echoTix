import React from 'react';

import Event from './Event';

import { EventsContainer } from '../../components/styles/Event.styled';

const Events = ({ events, onEventClicked }) => {
  return (
    <EventsContainer>
      {events
        ? events.map((show) => (
            <Event onEventClicked={onEventClicked} show={show} key={show.id} />
          ))
        : 'no show'}
    </EventsContainer>
  );
};

export default Events;
