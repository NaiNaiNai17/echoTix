import React from 'react';

import { Tables, TableRow } from '../../components/styles/BuyTickets.styled';

const GeneralEvaluation = () => {
  return (
    <Tables>
      <TableRow>
        <th align="center">Sales in Total</th>
        <th align="center">Tickets Sale in Total</th>
        <th align="center">Donations In Total</th>
        <th align="center">Trees in Total</th>
      </TableRow>
      <TableRow>
        <td align="center">30.000</td>
        <td align="center">15.000</td>
        <td align="center">5.000</td>
        <td align="center">299</td>
      </TableRow>
    </Tables>
  );
};

export default GeneralEvaluation;
