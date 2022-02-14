import React from 'react';

import Tickets from '../Buttons/Tickets';

import { EventContainer, Bandname } from '../../components/styles/Event.styled';

const Event = ({ show }) => {
  return (
    <EventContainer img={show.images.large.url}>
      <Bandname>{show.name}</Bandname>
     
    </EventContainer>
  );
};

export default Event;
