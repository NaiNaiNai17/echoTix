import React from 'react';
import { useState } from 'react';
import { sliderItems } from '../../data';

import {
  Container,
  Wrapper,
  ImgContainer,
  InfoContainer,
  EventTitle,
  ShowDescription,
  Button,
  Arrow,
  Image,
  Slide,
} from '../../components/styles/Hero.styled';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';

const Hero = () => {
  //* Slider Function
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
          <Slide>
            <ImgContainer>
              <Image src={item.img} />
              <InfoContainer>
                <EventTitle>{item.event}</EventTitle>
                <ShowDescription>{item.description}</ShowDescription>
                <Button>Buy Now</Button>
              </InfoContainer>
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Hero;
