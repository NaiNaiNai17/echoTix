import styled from 'styled-components/macro';

export const CheckoutContainer = styled.div.attrs(() => ({
  className: 'CheckoutContainer',
}))``;

export const CheckoutWrapper = styled.div.attrs(() => ({
  className: 'CheckoutWrapper',
}))`
  padding: 20px;

  background-color: #c4c4c4;
`;

export const CartTitle = styled.h1.attrs(() => ({
  className: 'CartTitle',
}))`
  font-weight: 300;
  text-align: center;
`;

export const CheckoutTop = styled.div.attrs(() => ({
  className: 'CheckoutContainer',
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button.attrs(() => ({
  className: 'TopButton',
}))`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
`;

export const CheckoutBottom = styled.div.attrs(() => ({
  className: 'CheckoutBottom',
}))`
  display: flex;
  justify-content: center;
`;

export const TopText = styled.span.attrs(() => ({
  className: 'TopText',
}))`
  text-decoration: underline;
  cursor: pointer;
`;

export const Info = styled.div.attrs(() => ({
  className: 'Info',
}))`
  flex: 3;
`;

export const Summary = styled.div.attrs(() => ({
  className: 'Summary',
}))`
  flex: 1;
`;

//* Order Details

export const Ticket = styled.div.attrs(() => ({
  className: 'Ticket',
}))`
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img.attrs(() => ({
  className: 'Image',
}))`
  width: 250px;
`;

export const City = styled.span.attrs(() => ({
  className: 'City',
}))`
  text-transform: uppercase;
`;

export const EventName = styled.span.attrs(() => ({
  className: 'EventName',
}))`
  font-size: xxx-large;
`;

export const Venue = styled.span.attrs(() => ({
  className: 'Venue',
}))``;

export const Date = styled.span.attrs(() => ({
  className: 'Date',
}))``;

export const EventID = styled.span.attrs(() => ({
  className: 'EventID',
}))``;

export const TicketDetail = styled.div.attrs(() => ({
  className: 'TicketDetail',
}))`
  flex: 2;
  display: flex;
`;

export const Details = styled.div.attrs(() => ({
  className: 'Details',
}))`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PriceDetail = styled.div.attrs(() => ({
  className: 'PriceDetail',
}))`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TicketAmountCountainer = styled.div.attrs(() => ({
  className: 'TicketAmountCountainer',
}))`
  display: flex;
  align-items: center;
`;

export const TicketAmount = styled.div.attrs(() => ({
  className: 'TicketAmount',
}))`
  font-size: 24px;
  margin: 15px;
`;

export const TicketPrice = styled.div.attrs(() => ({
  className: 'TicketPrice',
}))``;
