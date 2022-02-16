import styled from 'styled-components';

export const CardContainer = styled.div.attrs(() => ({
  className: 'CardContainer',
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
  className: 'Image',
}))`
  height: 170px;
  width: 170px;
  object-fit: cover;

  &:hover {
    transform: scale(1.1);
  }
`;
