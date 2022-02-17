import React from 'react';

//* IMPORT COMPONENTS

import TicketInfo from '../../components/BuyTickets/TicketsInfo';
import Counter from '../../components/BuyTickets/Counter';


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
  console.log('Eventinfo', show ? 'Show' : 'Noshow');

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
          <td>{new Date(show.event_date.value).toLocaleString()}</td> 
          <td>{show.showPrice}</td>
        </TableRow>
      </Table>
      <hr />
      <TicketInfo />
      <Counter />
    </EventInfoContainer>
  );
};

export default EventInfo;
