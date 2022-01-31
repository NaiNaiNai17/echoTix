import React from 'react';
import Counter from '../../components/BuyTickets/Counter';
import Buy from '../../components/Buttons/Buy';

import {
  TicketsDataContainer,
  TicketInfo,
  TicketH1,
} from '../../components/styles/BuyTickets.styled';

const TicketsInfo = () => {
  return (
    
      <TicketsDataContainer>
        <TicketInfo>
          <TicketH1>Get Your Tickets</TicketH1>
          <Counter />
          
        </TicketInfo>
      </TicketsDataContainer>
    
  );
};

export default TicketsInfo;
