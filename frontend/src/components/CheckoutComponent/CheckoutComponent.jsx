import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

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
     //const res = await axios.get('/tickets/basket')
     const basketContents = JSON.parse(sessionStorage.getItem("basket")) || [];
     //if(res.status === 200){
      setBasketLines(basketContents)
     //}
   } catch (error) {
     console.error('error happened', error)
   }
  }

  const continueShopping = () =>{
    navigate('/')
  }

  const removeBasketItem = (id) =>{
   const result = basketLines.findIndex((ticket)=>{
     
     return ticket.id === id
   })
   if(basketLines[result].qty > 1){
      const newBasketline = basketLines[result]
      newBasketline.qty = newBasketline.qty -1
     const newArray = [...basketLines]
     sessionStorage.setItem('basket', JSON.stringify(newArray))

     setBasketLines(newArray)
     } else {
       console.log(result)
       console.log(basketLines)
       const duplicateArray = [...basketLines]
       duplicateArray.splice(result,1)
      // const newValue= basketLines.splice(result, 1)
      setBasketLines(duplicateArray)
      sessionStorage.setItem('basket', JSON.stringify(duplicateArray))

     }


}
  const subTotal = basketLines.reduce((previousValue, currentValue) => {
    const cost = currentValue.price * currentValue.qty;
    return previousValue + cost;
  }, 0);

  const tax = subTotal * 0.19
  const totalIncTax = tax + subTotal
  return (
    <CheckoutContainer>
      <WrapAll>

        <CheckoutWrapper>
          <CartTitle>Shopping Cart</CartTitle>
          <CheckoutTop>
            <TopButton onClick={continueShopping}>Continue Shopping</TopButton>
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
                      <b>{basket.id}</b>
                      <div></div>
                    </EventID>
                  </Details>
                </TicketDetail>
                <PriceDetail>
                  <TicketAmountCountainer>
                    <Remove
                    onClick={()=>removeBasketItem(basket.id)}
                      style={{
                        width: '75px',
                        height: '75px',
                        fontWeight: '300',
                      }}
                    />
                    
                    <TicketAmount>{basket.qty}</TicketAmount>
                    {/* <Add style={{ width: '75px', height: '75px' }} /> */}
                  </TicketAmountCountainer>
                  <TicketPrice>{basket.price * basket.qty}</TicketPrice>
                </PriceDetail>
              </Ticket>
              )): 'No card items'}
              
              <Hr />
                <Summary>
              <SummaryTitle>Order Summary</SummaryTitle>
      
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>{subTotal}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Donation</SummaryItemText>
                <SummaryItemPrice>EUR 20</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Tax {tax.toFixed(2)}</SummaryItemText>
                <SummaryItemPrice></SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>{totalIncTax.toFixed(2)}</SummaryItemPrice>
              </SummaryItem>
              <SummaryButton>Checkout Now</SummaryButton>
            </Summary>

            </Info>
           
          </CheckoutBottom>
        </CheckoutWrapper>
      </WrapAll>
    </CheckoutContainer>
  );
};

export default CheckoutComponent;
