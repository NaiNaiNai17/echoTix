import styled from 'styled-components/macro';

export const EventDataContainer = styled.div.attrs(() => ({
  className: 'EventDataContainer',
}))`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const EventInfoContainer = styled.div.attrs(() => ({
  className: 'EventInfoContainer',
}))`
  padding: 40px;
  ${'' /* background-color: #c4c4c4; */}
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.7),
      rgba(200, 200, 200, 0.9)
    ),
    url(${(props) => props.img});
  background-size: cover;

  margin: 10px;
`;

export const EventTitle = styled.h1.attrs(() => ({
  className: 'EventTitle',
}))`
  margin-bottom: 25px;
  margin-top: 25px;
`;

export const EventCity = styled.h4.attrs(() => ({
  className: 'EventCity',
}))`
  margin-bottom: 5px;
  text-transform: uppercase;
  font-size: 3rem;
`;

export const Image = styled.img.attrs(() => ({
  className: 'Image',
}))`
  height: 170px;
  width: 170px;
  object-fit: cover;
`;

export const Table = styled.div.attrs(() => ({
  className: 'Table',
}))`
  width: 100%;
  margin-top: 20px;
  margin-top: 20px;
`;

export const TableRow = styled.tr.attrs(() => ({
  className: 'TableRow',
}))`
  th {
    width: 20rem;
    font-size: x-large;
  }
  td {
    width: 25%;
    font-size: large;
  }
`;

//* Tickets Data

export const TicketsDataContainer = styled.div.attrs(() => ({
  className: 'TicketsDataContainer',
}))`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const TicketInfo = styled.div.attrs(() => ({
  className: 'TicketInfo',
}))`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const TicketH1 = styled.h1.attrs(() => ({
  className: 'TicketH1',
}))`
  margin-bottom: 25px;
  width: 100%;
`;
