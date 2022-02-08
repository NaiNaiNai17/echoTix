import styled from 'styled-components/macro';

export const Container = styled.div.attrs(() => ({
  className: 'CardsContainer',
}))`
  padding: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  ${'' /* background-color: #264653; */}
`;
