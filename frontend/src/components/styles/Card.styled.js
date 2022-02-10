import styled from 'styled-components';

export const CardContainer = styled.div.attrs(() => ({
  className: 'CardContainer',
}))`
  margin: 10px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: space-between;
  width: 100%;
  height: 300px;
  background-color: e0e0e0;
  -webkit-box-shadow: 5px 5px 15px 5px #c6c6c6;
  box-shadow: 5px 5px 15px 5px #c6c6c6;
  padding: 40px;
`;

export const Eventname = styled.h3.attrs(() => ({
  className: 'Eventname',
}))`
  font-weight: 300;
  font-size: 3rem;
`;

export const ImageContainer = styled.div.attrs(() => ({
  className: 'ImageContainer',
}))``;

export const Image = styled.img.attrs(() => ({
  className: 'Container',
}))`
  height: 170px;
  width: 170px;
  object-fit: cover;

  &:hover {
    transform: scale(1.1);
  }
`;

export const DefaultCardContainer = styled.div.attrs(() => ({
  className: 'CardContainer',
}))``;
