import React from 'react';

import { TicketButton } from '../../components/styles/Buttons/Tickets.styled';

const Tickets = ({ nameHandler }) => {
  return <TicketButton onClick={(e) => nameHandler(e)}>Tickets</TicketButton>;
};

export default Tickets;
