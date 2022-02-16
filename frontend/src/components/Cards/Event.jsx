import React from 'react';
import { useNavigate } from 'react-router-dom';

import Tickets from '../Buttons/Tickets';

import { EventContainer, Cityname } from '../../components/styles/Event.styled';

const Event = ({ show, onEventClicked }) => {
  const navigate = useNavigate();

  const OnClickCityHandle = (e) => {
    e.preventDefault();
    onEventClicked(show)
    
  };

  return (
    <EventContainer
      style={{ cursor: 'pointer' }}
      onClick={OnClickCityHandle}
      img={show.images.large.url}
    >
      <Cityname style={{ overflow: 'hidden' }}>
        {show.venue.location.address.city}
      </Cityname>
    </EventContainer>
  );
};

export default Event;
