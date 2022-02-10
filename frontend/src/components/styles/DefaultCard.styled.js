import styled, { css } from 'styled-components';

export const DefaultCardContainer = styled.div.attrs(() => ({
  className: 'DefaultCardContainer',
}))``;

export const Image = styled.img.attrs(() => ({
  className: 'Container',
}))`
  height: 170px;
  width: 170px;
  object-fit: cover;
  padding: 15px;

  &:hover {
    transform: scale(1.1);
  }
`;
