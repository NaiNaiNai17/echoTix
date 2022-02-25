import styled from 'styled-components/macro';

export const NoContainer = styled.div.attrs(() => ({
  className: 'NoShowsContainer',
}))`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.unsplash.com/photo-1573152958734-1922c188fba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80');

  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;

export const NoShowMessage = styled.div.attrs(() => ({
  className: 'NoShowMessage',
}))`
  width: 50%;
  height: 50vh;
  opacity: 0.6;
  color: black;
  font-size: 3rem;
  text-align: center;
  display: flex;
  justify-content:center;
  align-items: center;
  padding: 20px;
  -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000,
    11px 9px 26px 5px #000000;
  box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000,
    11px 9px 26px 5px #000000;
`;

export const NotFoundH1 = styled.h1.attrs(() => ({
  className: 'NotFoundMessage',
}))`
  font-size: 6rem;
`;

export const NotFoundCountainer = styled.div.attrs(() => ({
  className: 'NotFoundCountainer',
}))`
  width: 50%;
  height: 50vh;
  background-color: red;
  opacity: 0.6;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000,
    11px 9px 26px 5px #000000;
  box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000,
    11px 9px 26px 5px #000000;
`;
