import React from 'react';

import {
  Container,
  ImageContainer,
  Image,
} from '../../components/styles/Hero.styled';

const Hero = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="../assets/Melt_1440x450.png" />
      </ImageContainer>
    </Container>
  );
};

export default Hero;
