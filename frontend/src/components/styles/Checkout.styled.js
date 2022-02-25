import styled from 'styled-components/macro';
import { mobile } from '../../responsive';

export const CheckoutContainer = styled.div.attrs(() => ({
  className: 'CheckoutContainer',
}))`
  background: rgb(216, 243, 218);
  background: linear-gradient(
    60deg,
    white 30%,
    rgba(41, 209, 158, 0.7) 60%,
    #043429 100%
  );
`;

export const WrapAll = styled.div.attrs(() => ({
  className: 'WrapAll',
}))`
  padding: 40px;
  ${mobile({
    display: 'flex',
    justifyContent: 'center',
  })};
`;

export const CheckoutWrapper = styled.div.attrs(() => ({
  className: 'CheckoutWrapper',
}))`
  padding: 40px;
  background-color: #c4c4c4;

  ${mobile({
    flexDirection: 'column',

    width: '25rem',
  })};
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

//* Order Details

export const Ticket = styled.div.attrs(() => ({
  className: 'Ticket',
}))`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  ${mobile({
    flexDirection: 'column',
  })};
`;

export const Image = styled.img.attrs(() => ({
  className: 'Image',
}))`
  width: 200px;
  height: 200px;
  object-fit: cover;

  ${
    '' /* ${mobile({
    height: '90%',
    width: '90%',
  })}; */
  }
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
  ${mobile({
    flexDirection: 'column',
    justifyContext: 'center',
    alignItems: 'center',
  })};
`;

export const Details = styled.div.attrs(() => ({
  className: 'Details',
}))`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobile({
    width: '100%',
    padding: '20px',
    flexDirection: 'row',
    justifyContent: 'space-between',
  })};
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
  margin-bottom: 20px;
`;

export const TicketAmount = styled.div.attrs(() => ({
  className: 'TicketAmount',
}))`
  font-size: 24px;
  margin: 15px;
`;

export const TicketPrice = styled.div.attrs(() => ({
  className: 'TicketPrice',
}))`
  font-size: 30px;
  font-weight: 200;
`;

export const Hr = styled.hr.attrs(() => ({
  className: 'Hr',
}))`
  background-color: #eee;
  border: none;
  height: 1px;
`;

//* Summary

export const Summary = styled.div.attrs(() => ({
  className: 'Summary',
}))`
  flex: 1;
  border: 0.5 solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 60vh;
  background-color: white;
  ${mobile({
    width: '25rem',
  })};
`;

export const SummaryTitle = styled.h1.attrs(() => ({
  className: 'SummaryTitle',
}))`
  font-weight: 200;
`;

export const SummaryItem = styled.div.attrs(() => ({
  className: 'SummaryItem',
}))`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'}
  font-size: ${(props) => props.type === 'total' && '24px'}
`;

export const SummaryItemText = styled.span.attrs(() => ({
  className: 'SummaryTitle',
}))``;

export const SummaryItemPrice = styled.span.attrs(() => ({
  className: 'SummaryItemPrice',
}))``;

export const SummaryButton = styled.button.attrs(() => ({
  className: 'SummaryButton',
}))`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 400;
`;
