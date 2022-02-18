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



const Counter = () =>{
  const {setCounter} = useContext(SearchContext)
  const [state, setState]= useState(0)

  const increment = ()=> {
    setState( state + 1 );
    setCounter(state)
  } 
  
  const decrement =()=> {
    if (state >= 1){
      setState(state - 1 )
    }
  
  setCounter(state)
}

    return (
      <CounterContainer>
        <CounterButtonContainer>
          <Remove
            onClick={() => decrement()}
            style={{ width: '75px', height: '75px' }}
          ></Remove>
          <CounterNumber style={{ fontSize: '2em' }}>
            {state}
          </CounterNumber>
          <Add
            onClick={() => increment()}
            style={{ width: '75px', height: '75px' }}
          ></Add>
        </CounterButtonContainer>
        <Buy/>
      </CounterContainer>
    );
  }




  
 

   
  


export default Counter;