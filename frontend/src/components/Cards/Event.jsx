import React from 'react';

import Tickets from '../Buttons/Tickets';

import { EventContainer, Bandname } from '../../components/styles/Event.styled';

const Event = ({ show }) => {
  return (
    <EventContainer img={show.images.large.url}>
      <Bandname>{show.name}</Bandname>
      {/* <h3>{show.event_date.value}</h3>
      <h4>{show.day_of_week}</h4>
      <h5>{show.venue.name}</h5>
      <h6>{show.name}</h6> */}
    </EventContainer>
  );
};

export default Event;
