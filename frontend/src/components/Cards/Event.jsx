import React from 'react';

import Tickets from '../Buttons/Tickets';

import { EventContainer, Cityname } from '../../components/styles/Event.styled';

const Event = ({ show }) => {
  console.log('Thats the show', show.venue.location.address.city);

  return (
    <EventContainer img={show.images.large.url}>
      <Cityname>{show.venue.location.address.city}</Cityname>
    </EventContainer>
  );
};

export default Event;
