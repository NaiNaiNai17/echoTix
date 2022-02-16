import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../util/axiosInstance'

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


const CheckoutComponent =  () => {
const navigate = useNavigate()
  const [basketLines,setBasketLines] = useState([])
  useEffect(() => {
    loadBasketLines()
   
  }, [])

  const loadBasketLines = async () =>{
   try {
     const res = await axios.get('/tickets/basket')
     if(res.status === 200){
      setBasketLines(res.data.basket)
     }
   } catch (error) {
     console.error('error happened', error)
   }
  }

  const continueShopping = () =>{
    navigate('/')
  }

  return (
    <CheckoutContainer>
      <WrapAll>

        <CheckoutWrapper>
          <CartTitle>Shopping Cart</CartTitle>
          <CheckoutTop>
            <TopButton onClick={continueShopping}>Continue Shopping</TopButton>
            <TopText>Quantity(4)</TopText>
            <TopButton type="filled">Checkout Now</TopButton>
          </CheckoutTop>
          <CheckoutBottom>
            <Info>
              {basketLines.map((basket)=>(
                <Ticket>
        
                <TicketDetail>
                  <Image src={basket.img} />
                  <Details>
                    <City>{basket.city}</City>
                    <EventName>{basket.ticketDescription}</EventName>
                    <Venue>
                      <b>Venue:</b>
                      <div>{basket.venue}</div>
                    </Venue>
                    <Date>
                      <b>Date</b>
                      <div>{basket.showDate}</div>
                    </Date>
                    <EventID>
                      <b>{basket.eventID}</b>
                      <div></div>
                    </EventID>
                  </Details>
                </TicketDetail>
                <PriceDetail>
                  <TicketAmountCountainer>
                    <Remove
                      style={{
                        width: '75px',
                        height: '75px',
                        fontWeight: '300',
                      }}
                    />
                    <TicketAmount>{basket.length}</TicketAmount>
                    <Add style={{ width: '75px', height: '75px' }} />
                  </TicketAmountCountainer>
                  <TicketPrice>{basket.price}</TicketPrice>
                </PriceDetail>
              </Ticket>
              ))}
              
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
    </CheckoutContainer>
  );
};

export default CheckoutComponent;
