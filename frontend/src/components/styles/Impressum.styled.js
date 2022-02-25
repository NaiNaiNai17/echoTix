import styled, { css } from 'styled-components';
import { mobile } from '../../responsive';
import { tabletSmall } from '../../responsive';

export const ImpressumContainer = styled.div.attrs(() => ({
  className: 'ImpressumContainer',
}))`
  width: 100%;
  height: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.unsplash.com/photo-1573152958734-1922c188fba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80');

  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;

  ${mobile({ display: 'flex', flexDirection: 'column' })};
  ${tabletSmall({ display: 'flex', flexDirection: 'column' })};
`;

export const TeamMembers = styled.div.attrs(() => ({
  className: 'TeamMembers',
}))`
  border: 1px solid grey;
  width: 300px;
  height: 80%;
  margin: 80px;
  padding: 50px;
  background-color: rgba(52, 52, 52, 60%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: Edo;
    margin: 20px;
    font-size: 3rem;
  }

  h2 {
    margin: 20px;
    font-size: 2.5rem;
    font-family: Edo;
  }
  h3 {
    margin: 20px;
    font-size: 2rem;
    text-decoration: underline;
    
  }

  h4 {
    font-size: 1rem;
    text-decoration: none;
  }

  img {
    border-radius: 50%;
    width: 200px;
  }
  ul {
    margin-top: 10px;

    li {
      margin: 10px;
    }
  }
`;

export const Technologies = styled.div.attrs(() => ({
  className: 'Technologies',
}))`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  img {
    width: 70px;
    height: 70px;
    padding: 10px;
    border-radius: 0%;
  }
`;
