import styled from 'styled-components';

export const MainCardContainer = styled.div.attrs(() => ({
  className: 'MainCardContainer',
}))`
  margin: 10px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: space-between;
  width: 80%;
  height: 300px;
  padding: 40px;
  background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.7),
      rgba(200, 200, 200, 0.9)
    ),
    url(${(props) => props.img});
  background-size: cover;
`;

export const CardContainer = styled.div.attrs(() => ({
  className: 'CardContainer',
}))``;

export const Eventname = styled.h3.attrs(() => ({
  className: 'Eventname',
}))`
  font-weight: 300;
  font-size: 3rem;
`;

export const ImageContainer = styled.div.attrs(() => ({
  className: 'ImageContainer',
}))`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img.attrs(() => ({
  className: 'Image',
}))`
  height: 200px;
  width: 200px;
  object-fit: cover;
`;

export const ShowCount = styled.h3.attrs(() => ({
  className: 'ShowCount',
}))`
  font-size: 2rem;
  color: #fff;
`;
