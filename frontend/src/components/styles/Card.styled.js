import styled from 'styled-components';
import { mobile } from '../../responsive';

export const MainCardContainer = styled.div.attrs(() => ({
  className: 'MainCardContainer',
}))`
  margin: 10px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: space-between;
  width: 80%;
  height: 400px;
  padding: 40px;
  background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.7),
      rgba(200, 200, 200, 0.9)
    ),
    url(${(props) => props.img});
  background-size: cover;
  ${mobile({
    height: '300px',
    padding: '25px',
  })};
`;

export const ResultContainer = styled.div.attrs(() => ({
  className: 'ResultContainer',
}))`
  display: flex;
  justify-content: space-between;
  align-items: last baseline;
  h2 {
    margin-right: 30px;
    ${mobile({
      fontSize: '1rem',
    })};
  }
`;

export const CardContainer = styled.div.attrs(() => ({
  className: 'CardContainer',
}))`
  h3 {
    margin-top: 20px;
    margin-bottom: 20px;
    ${mobile({
      fontSize: '1rem',
    })};
  }
`;

export const Eventname = styled.h1.attrs(() => ({
  className: 'Eventname',
}))`
  font-weight: 300;
  font-size: 3rem;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div.attrs(() => ({
  className: 'ImageContainer',
}))`
  position: relative;
  height: 200px;
  width: 200px;
`;

export const Image = styled.img.attrs(() => ({
  className: 'Image',
}))`
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  ${mobile({
    height: '80%',
    width: '80%',
  })};

  :hover {
    box-shadow: 0 0 10px 5px;
    opacity: 1;
  }
`;

export const ShowButton = styled.button.attrs(() => ({
  className: 'ShowButton',
}))`
  position: absolute;
  top: 30%;
  left: 13%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px;
  width: 10rem;
  background-color: transparent;

  color: white;
  font-size: large;
  display: flex;
  justify-content: center;
  border-radius: 100px;
  cursor: pointer;
  :hover {
    background-color: #2e8268;
  }
`;

export const ShowCount = styled.h3.attrs(() => ({
  className: 'ShowCount',
}))`
  font-size: 2rem;
  color: #fff;
`;
