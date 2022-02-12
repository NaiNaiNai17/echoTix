import styled from 'styled-components/macro';

export const SubheroItemContainer = styled.div.attrs(() => ({
  className: 'SubheroItemContainer',
}))`
  flex: 1;
  margin: 10px;
  height: 20rem;
  position: relative;
`;

export const Image = styled.img.attrs(() => ({
  className: 'Image',
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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
  opacity: 0;

  :hover {
    opacity: 1;
  }
  p {
    color: #fff;
    margin-top: 0.25rem;
    margin-bottom: 1rem;
    transform: scale(1.25);
  }
`;

export const Title = styled.h1.attrs(() => ({
  className: 'Title',
}))`
  color: #fff;
  font-size: 4rem;
  font-weight: bold;
  font-family: Edo;
`;
