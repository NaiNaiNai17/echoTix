import styled from 'styled-components/macro';

export const InfoButton = styled.button.attrs(() => ({
  className: 'InfoButton',
}))`
  padding: 20px;
  width: 15rem;
  background-color: #201d1d;
  color: #fff;
  font-size: large;
  display: flex;
  align-self: flex-end;
  justify-content: center;
`;
