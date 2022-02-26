import styled from 'styled-components';
import { mobile } from '../../responsive';

export const HeroImageContainer = styled.div.attrs(() => ({
  className: 'HeroImageContainer',
}))`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
`;

export const HeroImage = styled.img.attrs(() => ({
  className: 'HeroImage',
}))`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  display: block;

  :hover {
    opacity: 1;
  }
  ${mobile({ height: '50vh' })};
`;

export const InfoContainer = styled.div.attrs(() => ({
  className: 'InfoContainer',
}))`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  padding: 50px;
  padding-left: 100px;
  opacity: 0;
  justify-content: flex-start;
  flex-direction: column;
  opacity: 1;
  background: rgba(55, 55, 55, 0.3);
  ${mobile({
    padding: '10px',
    alignItems: 'center',
    justifyContent: 'center',
  })};

  p {
    background: rgb(55, 55, 55);
    background: linear-gradient(
      90deg,
      rgba(55, 55, 55, 1) 100%,
      rgba(0, 0, 0, 1) 100%
    );

    font-size: 1rem;
    line-height: 1.2rem;
    padding: 30px;
    color: #fff;
    color: #fff;
    margin-top: 2rem;
    margin-bottom: 2rem;
    opacity: 1;
    ${mobile({ padding: '20px' })};
  }
`;

export const InfoWrapper = styled.div.attrs(() => ({
  className: 'InfoWrapper',
}))`
  height: 5rem;
  opacity: 0.5;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Title = styled.h1.attrs(() => ({
  className: 'Title',
}))`
  color: #fff;
  font-size: 7rem;
  font-weight: bold;
  font-family: Edo;
  text-align: start;
  ${mobile({ fontSize: '3rem' })};
`;

export const Description = styled.p.attrs(() => ({
  className: 'Description',
}))`
  font-size: 3rem;
  width: 30rem;
  text-align: start;
  margin: -10px;
  ${mobile({ width: '20rem' })};
`;
