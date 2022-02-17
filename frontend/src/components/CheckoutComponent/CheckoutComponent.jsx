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
            <TopText>Quantity</TopText>
            <TopButton type="filled">Checkout Now</TopButton>
          </CheckoutTop>
          <CheckoutBottom>
            <Info>
              {basketLines ? basketLines.map((basket)=>(
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
              )): 'No card items'}
              
              <Hr />
              {basketLines ? basketLines.map((basket)=>( 
                <Summary>
              <SummaryTitle>Order Summary</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>{basket.totalIncVat}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Donation</SummaryItemText>
                <SummaryItemPrice>EUR 20</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Tax {basket.vat}</SummaryItemText>
                <SummaryItemPrice>{basket.fee}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>{basket.totalIncVat}</SummaryItemPrice>
              </SummaryItem>
              <SummaryButton>Checkout Now</SummaryButton>
            </Summary>
              )) : 'none'}

            </Info>
            
          </CheckoutBottom>
        </CheckoutWrapper>
      </WrapAll>
    </CheckoutContainer>
  );
};

export default CheckoutComponent;
