import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {SearchContext, searchContext} from '../../hoc/MainRouter'

//* Icons Import
import Add from '@material-ui/icons/AddCircleOutline';
import Remove from '@material-ui/icons/RemoveCircleOutline';

import Buy from '../Buttons/Buy';

import {
  CounterContainer,
  CounterButtonContainer,
  CounterNumber,
} from '../../components/styles/Counter.styled';



const Counter = ({id, price, img, venue, date, showName, city}) =>{
  const {setCounter} = useContext(SearchContext)
  const [quantity, setQuantity]= useState(0)

  const increment = ()=> {
    setQuantity( quantity + 1 );
    setCounter(quantity)
  } 
  
  const decrement =()=> {
    if (quantity >= 1){
      setQuantity(quantity - 1 )
    }
  
  setCounter(quantity)
}

    return (
      <CounterContainer>
        <CounterButtonContainer>
          <Remove
            onClick={() => decrement()}
            style={{ width: '75px', height: '75px' }}
          ></Remove>
          <CounterNumber style={{ fontSize: '2em' }}>
            {quantity}
          </CounterNumber>
          <Add
            onClick={() => increment()}
            style={{ width: '75px', height: '75px' }}
          ></Add>
        </CounterButtonContainer>
        <Buy id={id} price={price} qty={quantity} img={img} venue={venue} date={date} showName={showName} city={city}/>
      </CounterContainer>
    );
  }




  
 

   
  


export default Counter;