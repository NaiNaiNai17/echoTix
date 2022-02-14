import styled from 'styled-components/macro';

export const ImageContainer = styled.div.attrs(() => ({
  className: 'ImageContainer',
}))`
  height: 30rem;
  display: flex;
  justify-content: center;

  background: rgb(216, 243, 218);
  background: url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGl2ZSUyMG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1800&q=60'),
    linear-gradient(0deg, rgba(216, 243, 218, 1) 33%, rgba(7, 28, 49, 1) 100%);
  color: #fff;
`;

export const BTL = styled.h1.attrs(() => ({
  className: 'ImageContainer',
}))`
  color: #fff;
  align-self: center;
  font-weight: 900;
  font-size: 6rem;
  font-family: Edo;
`;
