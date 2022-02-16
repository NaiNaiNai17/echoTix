import styled from 'styled-components/macro';

export const Container = styled.div.attrs(() => ({
  className: 'Container',
}))`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const EventsContainer = styled.div.attrs(() => ({
  className: 'EventsContainer',
}))`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const EventCount = styled.h2.attrs(() => ({
  className: 'EventCount',
}))`
  display: flex;
  justify-content: center;
`;

export const Cityname = styled.h2.attrs(() => ({
  className: 'Cityname',
}))`
  font-weight: 300;
  font-size: 7vh;
  text-align: center;
  line-break: normal;
`;

export const EventContainer = styled.div.attrs(({ show }) => ({
  className: 'EventContainer',
}))`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  height: 200px;
  padding: 20px;
  margin: 20px;
  background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.7),
      rgba(200, 200, 200, 0.9)
    ),
    url(${(props) => props.img});
  background-size: cover;
  -webkit-box-shadow: 5px 5px 15px 5px #f7f7f7;
  box-shadow: 5px 5px 15px 5px #f7f7f7;
  color: #fff;
`;
