import React from 'react';
import { useState } from 'react';
import { sliderItems } from '../../data';

import {
  Container,
  ImageContainer,
  Image,
  Wrapper,
  Arrow,
} from '../../components/styles/Hero.styled';

import { ArrowLeft, ArrowRight } from '@material-ui/icons';

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <ImageContainer>
            <Image src={item.img} />
          </ImageContainer>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Hero;
