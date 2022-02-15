import React from 'react';
import { useNavigate } from 'react-router-dom';

import Tickets from '../Buttons/Tickets';

import { EventContainer, Cityname } from '../../components/styles/Event.styled';

const Event = ({ show }) => {
  const navigate = useNavigate();

  const OnClickCityHandle = () => {
    navigate(`/eventdetail`, { replace: true });
  };

  return (
    <EventContainer
      style={{ cursor: 'pointer' }}
      onClick={OnClickCityHandle}
      img={show.images.large.url}
    >
      <Cityname>{show.venue.location.address.city}</Cityname>
    </EventContainer>
  );
};

export default Event;
