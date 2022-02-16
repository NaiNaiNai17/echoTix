import React from 'react';
import { useNavigate } from 'react-router-dom';

//* Icons Import
import Add from '@material-ui/icons/AddCircleOutline';
import Remove from '@material-ui/icons/RemoveCircleOutline';

import Buy from '../Buttons/Buy';

import {
  CounterContainer,
  CounterButtonContainer,
  CounterNumber,
} from '../../components/styles/Counter.styled';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 1 };
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    // const navigate = useNavigate();

    // const onBuyHandler = () => {
    //   navigate(`/shoppingcart`, { replace: true });
    // };

    return (
      <CounterContainer>
        <CounterButtonContainer>
          <Remove
            onClick={() => this.decrement()}
            style={{ width: '75px', height: '75px' }}
          ></Remove>
          <CounterNumber style={{ fontSize: '2em' }}>
            {this.state.count}
          </CounterNumber>
          <Add
            onClick={() => this.increment()}
            style={{ width: '75px', height: '75px' }}
          ></Add>
        </CounterButtonContainer>
        <Buy/>
      </CounterContainer>
    );
  }
}

export default Counter;
