import React from 'react';

import TicketsInfo from '../../components/BuyTickets/TicketsInfo';
import InfoButtonContainer from '../../components/BuyTickets/InfoButton';

import {
  EventDataContainer,
  EventInfo,
  EventCity,
  EventTitle,
  Table,
  TableRow,
} from '../../components/styles/BuyTickets.styled';

const EventData = () => {
  return (
    <div>
      <EventDataContainer>
        <InfoButtonContainer />
        <EventInfo>
          <EventCity>Hamburg</EventCity>
          <EventTitle>Alt-J</EventTitle>
          <Table>
            <table>
              <TableRow>
                <th align="left">Venue</th>
                <th align="left">Date</th>
                <th align="left">Price</th>
                <th align="left">Available</th>
              </TableRow>
              <tr>
                <td>Große Freiheit 36</td>
                <td>11.11.2022</td>
                <td>32.99</td>
                <td>299</td>
              </tr>
            </table>
          </Table>
        </EventInfo>
        <TicketsInfo></TicketsInfo>
      </EventDataContainer>
    </div>
  );
};

export default EventData;
