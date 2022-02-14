import styled, { css } from 'styled-components';

export const Image = styled.div.attrs(({ item }) => ({
  className: 'Image',
}))`
  width: 20rem;
  height: 20rem;
  background: rgba(32, 29, 29, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  ${'' /* background: url(${(props) => props.item.img}); */}

  p {
    font-size: 3rem;
    font-weight: bold;
    font-family: Edo;
    color: #fff;
    text-align: center;
  }
`;

export const FrontBackContainer = styled.div.attrs(({ item }) => ({
  className: 'FrontBackContainer',
}))`
  margin: 20px;
  width: '20rem;
  height: 20rem';
  background: 'rgba(32, 29, 29, 0.6);';
  display: flex;
  justify-content: center;
  align-items: center;
`;

// export const FrontBackWrapper = styled.div.attrs(({ item }) => ({
//   className: 'FrontWrapper',
// }))`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 25rem;
//   height: 25rem;
// `;

// export const FlipCardFront = styled.div.attrs(({ item }) => ({
//   className: 'FlipCardFront',
// }))`
//   backface-visibility: hidden;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;

//   &.front {
//     transform: rotateY(0);
//     background-color: #2d2d2d;
//     color: #fff;
//   }

//   &.back {
//     transform: rotateY(180deg);
//     background-color: #fff;
//     color: #2d2d2d;
//   }
// `;

// export const DefaultCardContainer = styled.div.attrs(() => ({
//   className: 'DefaultCardContainer',
// }))`
//   position: relative;
//   margin: 10px;
//   height: 250px;
//   width: 250px;
// `;

// export const Card = styled.div.attrs(({ item }) => ({
//   className: 'Card',
// }))`
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100%;
//   background: rgba(32, 29, 29, 0.6);
//   background: linear-gradient(
//       to left,
//       rgba(32, 29, 29, 0.6),
//       rgba(00, 00, 00, 1)
//     ),
//     url(${(props) => props.img});
//   background-size: cover;

//   :hover {
//     opacity: 1;
//     background: url(${(props) => props.img});
//     background-size: cover;
//   }
// `;

// export const Front = styled.div.attrs(() => ({
//   className: 'Front',
// }))`
//   position: absolute;
//   color: #fff;
//   font-size: 2rem;
//   font-weight: bold;
//   font-family: Edo;
//   line-break: auto;
//   text-align: center;
//   opacity: 1;

//   :hover {
//     opacity: 0;
//   }
// `;

// export const Back = styled.div.attrs(() => ({
//   className: 'Back',
// }))`
//   position: absolute;
//   top: 40%;
//   left: 22%;
//   opacity: 0;

//   background: url(${(props) => props.img});

//   :hover {
//     opacity: 1;
//   }
// `;

// export const Image = styled.img.attrs(() => ({
//   className: 'Container',
// }))`
//   object-fit: cover;
//   display: block;
//   width: 15em;
//   height: 15em;
//   background: rgba(0, 0, 0, 0.6);
// `;

// export const Title = styled.h4.attrs(() => ({
//   className: 'Container',
// }))`
//   color: #fff;
//   font-size: 2rem;
//   font-weight: bold;
//   font-family: Edo;
//   line-break: auto;
//   text-align: center;
// `;

// export const Info_Overlay = styled.div.attrs(() => ({
//   className: 'Info_Overlay',
// }))`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.6);
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   opacity: 1;

//   :hover {
//     opacity: 0;
//   }
// `;
