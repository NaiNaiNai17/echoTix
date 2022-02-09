import styled from 'styled-components/macro';

export const Container = styled.div.attrs(() => ({
  className: 'CardsContainer',
}))`
  padding: 20px;
  flex-flow: row wrap;
  width: 90%;
`;
