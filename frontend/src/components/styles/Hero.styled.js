import styled from 'styled-components/macro';

export const HeroImageContainer = styled.div.attrs(() => ({
  className: 'HeroImageContainer',
}))`
  position: relative;
`;

export const HeroImage = styled.img.attrs(() => ({
  className: 'HeroImage',
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  :hover {
    opacity: 1;
  }
`;
