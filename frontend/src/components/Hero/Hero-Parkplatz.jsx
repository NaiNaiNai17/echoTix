import React from 'react';

import { sliderItems } from '../../data';

import {
  ImageContainer,
  Image,
  Wrapper,
} from '../../components/styles/Hero.styled';

const Hero = () => {
  return (
    <Wrapper>
      {sliderItems.map((item) => (
        <ImageContainer>
          <Image src={item.img} key={item} />
        </ImageContainer>
      ))}
    </Wrapper>
  );
};

export default Hero;
