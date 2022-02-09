import styled from 'styled-components/macro';

export const Container = styled.div.attrs(() => ({
  className: 'CardContainer',
}))`
  ${'' /* flex: 1; */}
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
