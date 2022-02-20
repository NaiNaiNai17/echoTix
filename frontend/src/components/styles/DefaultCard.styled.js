import styled, { css } from 'styled-components';

export const Bandname = styled.div.attrs(() => ({
  className: 'Bandname',
}))`
  font-size: 3rem;
  font-weight: bold;
  font-family: Edo;
  color: #fff;
  text-align: center;
`;

export const FrontContainer = styled.div.attrs(({ item }) => ({
  className: 'FrontContainer',
}))`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.7),
      rgba(200, 200, 200, 0.6)
    ),
    url(${(props) => props.img});
  background-size: cover;
`;

export const BackContainer = styled.div.attrs(({ item }) => ({
  className: 'BackContainer',
}))`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(55, 55, 55, 1) 100%,
    rgba(0, 0, 0, 1) 100%
  );
  background-size: cover;
  color: #fff;
`;

export const Cities = styled.h5.attrs(({ item }) => ({
  className: 'Cities',
}))`
  font-size: 1rem;
  padding-right: 10px;
`;

export const BackInfoContainer = styled.div.attrs(({ item }) => ({
  className: 'BackInfoContainer',
}))`
  position: absolute;
  top: 30px;
  display: flex;
  justify-content: space-around;

  ul {
    padding: 10px;
    li {
      padding: 5px;
      list-style: none;
    }
  }
`;

export const Date = styled.div.attrs(({ item }) => ({
  className: 'Date',
}))``;
