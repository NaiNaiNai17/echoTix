import styled from 'styled-components/macro';

export const EventDataContainer = styled.div.attrs(() => ({
  className: 'EventDataContainer',
}))`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 80%;

  padding: 50px;
  background: rgb(216, 243, 218);
  background: linear-gradient(
    0deg,
    rgba(216, 243, 218, 1) 33%,
    rgba(7, 28, 49, 1) 100%
  );
`;

export const EventInfo = styled.div.attrs(() => ({
  className: 'EventInfo',
}))`
  padding: 40px;
  background-color: #c4c4c4;
  height: 40vh;
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

export const EventTitle = styled.h1.attrs(() => ({
  className: 'EventDataContainer',
}))`
  margin-bottom: 25px;
`;

export const EventCity = styled.h4.attrs(() => ({
  className: 'EventDataContainer',
}))`
  margin-bottom: 5px;
  text-transform: uppercase;
`;

export const Table = styled.tr.attrs(() => ({
  className: 'Table',
}))`
  width: 70%;
`;

export const TableRow = styled.tr.attrs(() => ({
  className: 'TableRow',
}))`
  th {
    width: 700px;
  }
`;

//* TicketsData

export const TicketsDataContainer = styled.tr.attrs(() => ({
  className: 'TicketsDataContainer',
}))`
  display: flex;
  justify-content: center;
`;

export const TicketInfo = styled.div.attrs(() => ({
  className: 'TicketInfo',
}))`
  padding: 40px;
  background-color: #e7e5e5;
  width: 100%;
  height: 40vh;
`;

export const TicketH1 = styled.h1.attrs(() => ({
  className: 'TicketH1',
}))`
  margin-bottom: 25px;
`;
