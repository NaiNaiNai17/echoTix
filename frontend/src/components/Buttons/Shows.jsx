import React from 'react';

import { TicketButton } from '../../components/styles/Buttons/Tickets.styled';

const Shows = ({ showHandler }) => {
  return <TicketButton onClick={(e) => showHandler(e)}>Shows</TicketButton>;
};

export default Shows;
