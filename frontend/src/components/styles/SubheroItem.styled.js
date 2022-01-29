import styled from 'styled-components/macro';

export const SubheroItemContainer = styled.div.attrs(() => ({
  className: 'SubheroItemContainer',
}))`
  flex: 1;
  margin: 10px;
  height: 50vh;
`;

export const Image = styled.img.attrs(() => ({
  className: 'Image',
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div.attrs(() => ({
  className: 'Info',
}))``;

export const Title = styled.h3.attrs(() => ({
  className: 'Title',
}))``;
