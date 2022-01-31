import styled from 'styled-components/macro';

export const Container = styled.div.attrs(() => ({
  className: 'Container',
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

  &:hover {
    transform: scale(1.1);
  }
`;
