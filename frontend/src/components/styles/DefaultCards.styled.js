import styled from 'styled-components/macro';

export const DefaultCardsContainer = styled.div.attrs(() => ({
  className: 'DefaultCardsContainer',
}))`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;
