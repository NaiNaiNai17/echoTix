import styled from 'styled-components/macro';

export const HeroImageContainer = styled.div.attrs(() => ({
  className: 'HeroImageContainer',
}))`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
`;

export const HeroImage = styled.img.attrs(() => ({
  className: 'HeroImage',
}))`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  display: block;

  :hover {
    opacity: 1;
  }
`;

export const InfoContainer = styled.div.attrs(() => ({
  className: 'InfoContainer',
}))`
  padding-left: 30px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding: 50px;
  opacity: 0;
  justify-content: flex-start;
  flex-direction: column;

  ${'' /* opacity: 0; */}

  :hover {
    opacity: 1;
    background: rgba(55, 55, 55, 0.3);

    p {
      background: rgb(55, 55, 55);
      background: linear-gradient(
        90deg,
        rgba(55, 55, 55, 1) 100%,
        rgba(0, 0, 0, 1) 100%
      );

      font-size: small;
      line-height: 1.2rem;
      padding: 20px;
      color: #fff;
      border-radius: 20px;
      color: #fff;
      margin-top: 1rem;
      margin-bottom: 1rem;
      opacity: 1;
    }
  }
`;

export const InfoWrapper = styled.div.attrs(() => ({
  className: 'InfoWrapper',
}))`
  height: 5rem;
  opacity: 0.5;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Title = styled.h1.attrs(() => ({
  className: 'Title',
}))`
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  font-family: Edo;
  text-align: start;
`;

export const Description = styled.p.attrs(() => ({
  className: 'Description',
}))`
  font-size: 1rem;
  width: 30rem;
  text-align: start;
  margin: -20px;
`;
