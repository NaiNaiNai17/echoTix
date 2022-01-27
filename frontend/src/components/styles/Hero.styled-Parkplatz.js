import styled from 'styled-components/macro';

//* HERO / SLIDER

export const Container = styled.div.attrs(() => ({
  className: 'Container',
}))`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  background-color: #cad2c5;
  position: relative;
  overflow: hidden;
`;

//* Slider Section - Image Container

export const Wrapper = styled.div.attrs(() => ({
  className: 'Wrapper',
}))`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * 100}vw);
`;

export const Slide = styled.div.attrs(() => ({
  className: 'Slide',
}))`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-conten: center;
`;

export const ImgContainer = styled.div.attrs(() => ({
  className: 'ImgContainer',
}))`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img.attrs(() => ({
  className: 'Image',
}))`
  height: 50%;
`;

//* Info Container

// export const InfoContainer = styled.div.attrs(() => ({
//   className: 'InfoContainer',
// }))`
//   width: 50%;
//   padding: 50px;
// `;

// export const EventTitle = styled.h1.attrs(() => ({
//   className: 'EventTitle',
// }))`
//   font-size: 50px;
// `;

// export const ShowDescription = styled.p.attrs(() => ({
//   className: 'ShowDescription',
// }))`
//   margin: 10px 0px;
//   font-size: 10px;
//   font-weight: 500px;
//   letter-spacing: 3px;
// `;

// export const Button = styled.button.attrs(() => ({
//   className: 'Button',
// }))`
//   background-color: transparent;
//   cursor: pointer;
// `;

//* Arrows for Slider

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
