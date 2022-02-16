import styled from 'styled-components/macro';

export const BuyButton = styled.button.attrs(() => ({
  className: 'BuyButton',
}))`
  padding: 20px;
  width: 15rem;
  background-color: #2e8268;
  color: white;
  font-size: large;
  display: flex;
  justify-content: center;
  border-radius: 100px;
  cursor: pointer;
`;
