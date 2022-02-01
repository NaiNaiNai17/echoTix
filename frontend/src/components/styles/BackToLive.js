import styled from 'styled-components/macro';

export const ImageContainer = styled.h1.attrs(() => ({
  className: 'ImageContainer',
}))`
  display: flex;
  justify-content: center;
  background: rgb(216, 243, 218);
  background: linear-gradient(
    0deg,
    rgba(216, 243, 218, 1) 33%,
    rgba(7, 28, 49, 1) 100%
  );
  color: #fff;
`;
