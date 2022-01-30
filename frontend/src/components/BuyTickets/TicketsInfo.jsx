import React from 'react';

import {
  TicketsDataContainer,
  TicketInfo,
  TicketH1,
} from '../../components/styles/BuyTickets.styled';

const TicketsInfo = () => {
  return (
    <div>
      <TicketsDataContainer>
        <TicketInfo>
          <TicketH1>Get Your Tickets</TicketH1>
        </TicketInfo>
      </TicketsDataContainer>
    </div>
  );
};

export default TicketsInfo;
