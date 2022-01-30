import React from 'react';

import {
  EventInfoContainer,
  EventCity,
  EventTitle,
  Table,
  TableRow,
} from '../../components/styles/BuyTickets.styled';

const EventInfo = () => {
  return (
    <EventInfoContainer>
      <EventCity>Hamburg</EventCity>
      <EventTitle>Alt-J</EventTitle>
      <Table>
        <TableRow>
          <th align="left">Venue</th>
          <th align="left">Date</th>
          <th align="left">Price</th>
          <th align="left">Available</th>
        </TableRow>
        <TableRow>
          <td>Große Freiheit 36</td>
          <td>11.11.2022</td>
          <td>32.99</td>
          <td>299</td>
        </TableRow>
      </Table>
    </EventInfoContainer>
  );
};

export default EventInfo;
