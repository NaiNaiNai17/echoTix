import styled from 'styled-components/macro';

export const Container = styled.div.attrs(() => ({
  className: 'Container',
}))`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  background-color: #264653;

`;
