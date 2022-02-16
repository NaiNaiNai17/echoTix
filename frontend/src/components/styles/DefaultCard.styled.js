import styled, { css } from 'styled-components';

export const Bandname = styled.div.attrs(() => ({
  className: 'Bandname',
}))`
  font-size: 3rem;
  font-weight: bold;
  font-family: Edo;
  color: #fff;
  text-align: center;
`;

export const FrontContainer = styled.div.attrs(({ item }) => ({
  className: 'FrontContainer',
}))`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.7),
      rgba(200, 200, 200, 0.6)
    ),
    url(${(props) => props.img});
  background-size: cover;
`;

export const BackContainer = styled.div.attrs(({ item }) => ({
  className: 'BackContainer',
}))`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(55, 55, 55, 1) 100%,
    rgba(0, 0, 0, 1) 100%
  );
  background-size: cover;
  color: #fff;
`;

export const Cities = styled.h5.attrs(({ item }) => ({
  className: 'Cities',
}))`
  font-size: 1rem;
`;

export const BackInfoContainer = styled.div.attrs(({ item }) => ({
  className: 'BackInfoContainer',
}))`
  position: absolute;
  top: 50px;
  display: flex;
  justify-content: space-around;

  ${'' /* justify-content: space-around; */}
`;

export const Date = styled.div.attrs(({ item }) => ({
  className: 'Date',
}))``;

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
//   left: 22%;{ item }
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
