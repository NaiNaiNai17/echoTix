import styled from 'styled-components';
import { mobile } from '../../responsive';

export const SubheroContainer = styled.div.attrs(() => ({
  className: 'SubheroContainer',
}))`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    20deg,
    rgba(255, 255, 255, 1) 23%,
    rgba(20, 219, 150, 1) 64%,
    rgba(55, 55, 55, 1) 100%
  );
  ${mobile({ flexDirection: 'column' })};
`;
