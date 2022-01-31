import React from 'react';

//* Icons Import
import Add from '@material-ui/icons/AddCircleOutline';
import Remove from '@material-ui/icons/RemoveCircleOutline';

import {
  CheckoutContainer,
  CheckoutWrapper,
  CartTitle,
  CheckoutTop,
  CheckoutBottom,
  TopButton,
  TopText,
  Info,
  Summary,
  Ticket,
  Details,
  City,
  EventName,
  Venue,
  Date,
  TicketDetail,
  PriceDetail,
  EventID,
  Image,
  TicketAmountCountainer,
  TicketAmount,
  TicketPrice,
} from '../../components/styles/Checkout.styled';
import { StylesContext } from '@material-ui/styles';

const CheckoutComponent = () => {
  return (
    <CheckoutContainer>
      <CheckoutWrapper>
        <CartTitle>Shopping Cart</CartTitle>
        <CheckoutTop>
          <TopButton>Continue Shopping</TopButton>
          <TopText>Quantatity(4)</TopText>
          <TopButton type="filled">Checkout Now</TopButton>
        </CheckoutTop>
        <CheckoutBottom>
          <Info>
            <Ticket>
              <TicketDetail>
                <Image src="https://i.discogs.com/DWQBYCvcOP4mh5ZVwMfHT0v0mD_mh_5rM63T_OzWask/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTE0/NjQ5MTEtMTU4NjYx/MDc3MS03NzQzLmdp/Zg.jpeg" />
                <Details>
                  <City>Hamburg</City>
                  <EventName>Karate</EventName>
                  <Venue>
                    <b>Venue:</b>
                    <div>Große Freiheit 36</div>
                  </Venue>
                  <Date>
                    <b>Date</b>
                    <div>11.11.2022</div>
                  </Date>
                  <EventID>
                    <b>EventID</b>
                    <div>90807060504030</div>
                  </EventID>
                </Details>
              </TicketDetail>
              <PriceDetail>
                <TicketAmountCountainer>
                  <Add style={{ width: '75px', height: '75px' }} />
                  <TicketAmount>2</TicketAmount>
                  <Remove style={{ width: '75px', height: '75px' }} />
                </TicketAmountCountainer>
                <TicketPrice>EUR 30</TicketPrice>
              </PriceDetail>
            </Ticket>
          </Info>
          <Summary>Summary</Summary>
        </CheckoutBottom>
      </CheckoutWrapper>
    </CheckoutContainer>
  );
};

export default CheckoutComponent;
