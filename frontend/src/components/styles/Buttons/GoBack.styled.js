import styled from 'styled-components/macro';

export const GoBackButton = styled.button.attrs(() => ({
  className: 'GoBackButton',
}))`
  margin-top: 10px;
  margin-bottom: 10px;
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
