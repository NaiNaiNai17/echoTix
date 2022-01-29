import styled from 'styled-components/macro';

export const Container = styled.div.attrs(() => ({
  className: 'Container',
}))`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: rgb(217, 237, 146);
  background: linear-gradient(
    90deg,
    rgba(217, 237, 146, 1) 0%,
    rgba(24, 78, 119, 1) 100%
  );
`;
