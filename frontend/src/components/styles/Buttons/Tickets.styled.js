import styled from 'styled-components/macro';

export const TicketButton = styled.button.attrs(() => ({
  className: 'TicketButton',
}))`
  padding: 10px;
  width: 10rem;
  background-color: #2e8268;
  color: #fff;
  font-size: large;
  display: flex;
  justify-content: center;
  border-radius: 100px;
  cursor: pointer;
`;
