import styled, { css } from 'styled-components';

export const DefaultCardContainer = styled.div.attrs(() => ({
  className: 'DefaultCardContainer',
}))`
  position: relative;
  padding: 0px;
  margin: 10px;
`;

export const Image = styled.img.attrs(() => ({
  className: 'Container',
}))`
  object-fit: cover;
  display: block;
  width: 15em;
  height: 15em;
`;

export const Info = styled.div.attrs(() => ({
  className: 'Info_Overlay',
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: 1;

  :hover {
    opacity: 0;
  }
`;

export const Title = styled.h4.attrs(() => ({
  className: 'Container',
}))`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  font-family: Edo;
  line-break: auto;
  text-align: center;
`;
