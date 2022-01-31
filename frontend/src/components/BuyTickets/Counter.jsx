import React from 'react';

import Buy from '../Buttons/Buy';

import {
  CounterContainer,
  CounterButtonContainer,
  CounterButton,
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
    return (
      <CounterContainer>
        <CounterButtonContainer>
          <CounterButton onClick={() => this.decrement()}>-</CounterButton>
          <CounterNumber>{this.state.count}</CounterNumber>
          <CounterButton onClick={() => this.increment()}>+</CounterButton>
        </CounterButtonContainer>
        <Buy />
      </CounterContainer>
    );
  }
}

export default Counter;
