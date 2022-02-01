import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

//* Icons Import
import Add from '@material-ui/icons/AddCircleOutline';
import Remove from '@material-ui/icons/RemoveCircleOutline';

import {
  CheckoutContainer,
  WrapAll,
  CheckoutWrapper,
  CartTitle,
  CheckoutTop,
  CheckoutBottom,
  TopButton,
  TopText,
  Info,
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
  Hr,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  SummaryButton,
} from '../../components/styles/Checkout.styled';

const CheckoutComponent = () => {
  return (
    <CheckoutContainer>
      <Navbar />
      <WrapAll>
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
                      <div></div>
                    </EventID>
                  </Details>
                </TicketDetail>
                <PriceDetail>
                  <TicketAmountCountainer>
                    <Remove style={{ width: '75px', height: '75px' }} />
                    <TicketAmount>2</TicketAmount>
                    <Add style={{ width: '75px', height: '75px' }} />
                  </TicketAmountCountainer>
                  <TicketPrice>EUR 30</TicketPrice>
                </PriceDetail>
              </Ticket>
              <Hr />
              <Ticket>
                <TicketDetail>
                  <Image src="https://i.discogs.com/UkAHVId2CtYN8zmwzjFF3k5KLFTwQuAYfJaSWR-7RUY/rs:fit/g:sm/q:90/h:548/w:600/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTIz/NDgxODAtMTUwMjEy/MDkxMy01NjgxLmpw/ZWc.jpeg" />
                  <Details>
                    <City>Berlin</City>
                    <EventName>Damien Jurado</EventName>
                    <Venue>
                      <b>Venue:</b>
                      <div>Astra</div>
                    </Venue>
                    <Date>
                      <b>Date</b>
                      <div>22.11.2022</div>
                    </Date>
                    <EventID>
                      <b>EventID</b>
                      <div></div>
                    </EventID>
                  </Details>
                </TicketDetail>
                <PriceDetail>
                  <TicketAmountCountainer>
                    <Remove style={{ width: '75px', height: '75px' }} />
                    <TicketAmount>2</TicketAmount>
                    <Add style={{ width: '75px', height: '75px' }} />
                  </TicketAmountCountainer>
                  <TicketPrice>EUR 20</TicketPrice>
                </PriceDetail>
              </Ticket>
            </Info>
            <Summary>
              <SummaryTitle>Order Summary</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>EUR 50</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Donation</SummaryItemText>
                <SummaryItemPrice>EUR 20</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Tax (19% MwST)</SummaryItemText>
                <SummaryItemPrice>EUR 5</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>EUR 50</SummaryItemPrice>
              </SummaryItem>
              <SummaryButton>Checkout Now</SummaryButton>
            </Summary>
          </CheckoutBottom>
        </CheckoutWrapper>
      </WrapAll>
      <Footer />
    </CheckoutContainer>
  );
};

export default CheckoutComponent;
