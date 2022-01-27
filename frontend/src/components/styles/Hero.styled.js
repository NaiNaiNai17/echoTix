import styled from 'styled-components/macro';

export const Container = styled.div.attrs(() => ({
  className: 'Container',
}))`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  background-color: #cad2c5;
  position: relative;
  overflow: hidden;
`;

export const Wrapper = styled.div.attrs(() => ({
  className: 'Wrapper',
}))`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * 100}vw);
`;

export const ImageContainer = styled.div.attrs(() => ({
  className: 'ImageContainer',
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transform: translateX(${(props) => props.slideIndex * 100}vw);
`;

export const Image = styled.img.attrs(() => ({
  className: 'Image',
}))`
  height: 80%;
`;

export const Arrow = styled.div.attrs(() => ({ className: 'Arrow' }))`
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: point;
  opacity: 0.5;
  z-index: 2;
`;
