import styled from 'styled-components/macro';

export const CounterContainer = styled.div.attrs(() => ({
  className: 'CounterContainer',
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CounterButton = styled.button.attrs(() => ({
  className: 'CounterContainer',
}))`
  padding: 20px;
  margin: 20px;
  border: 5px solid black;
  border-radius: 50%;
  font-size: x-large;
`;

export const CounterButtonContainer = styled.div.attrs(() => ({
  className: 'CounterButtonContainer,',
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CounterNumber = styled.h4.attrs(() => ({
  className: 'CounterNumber',
}))`
  width: 2rem;
  text-align: center;
`;
