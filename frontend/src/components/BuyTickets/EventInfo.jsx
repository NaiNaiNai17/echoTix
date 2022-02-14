import React from 'react';

//* IMPORT COMPONENTS

import TicketInfo from '../../components/BuyTickets/TicketsInfo';

//* IMPORT STYLE COMPONENTS
import {
  EventInfoContainer,
  EventCity,
  EventTitle,
  Image,
  Table,
  TableRow,
} from '../../components/styles/BuyTickets.styled';

const EventInfo = ({ show }) => {
  console.log('Eventinfo', show);
  return (
    <EventInfoContainer img={show.images.large.url}>
      <EventCity>{show.venue.location.address.city}</EventCity>
      <hr />
      <EventTitle>{show.name}</EventTitle>
      <Image src={show.images.large.url} />
      <Table>
        <TableRow>
          <th align="left">Venue</th>
          <th align="left">Date</th>
          <th align="left">Price</th>
        </TableRow>
        <TableRow>
          <td>{show.venue.name}</td>
          <td>{show.event_date.value}</td>
          <td>32.99</td>
        </TableRow>
      </Table>
      <hr />
      <TicketInfo />
    </EventInfoContainer>
  );
};

export default EventInfo;
