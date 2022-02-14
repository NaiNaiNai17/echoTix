import React from 'react';

import {
  EventInfoContainer,
  EventCity,
  EventTitle,
  Tables,
  TableRow,
} from '../../components/styles/BuyTickets.styled';

const EventInfo = ({ show }) => {
  console.log('Eventinfo', show);
  return (
    <EventInfoContainer>
      <EventCity>{show.venue.location.address.city}</EventCity>
      <EventTitle>{show.name}</EventTitle>
      <Tables>
        <TableRow>
          <th align="left">Venue</th>
          <th align="left">Date</th>
          <th align="left">Price</th>
          <th align="left">Available</th>
        </TableRow>
        <TableRow>
          <td>{show.venue.name}</td>
          <td>{show.event_date.value}</td>
          <td>32.99</td>
          <td>299</td>
        </TableRow>
      </Tables>
    </EventInfoContainer>
  );
};

export default EventInfo;
