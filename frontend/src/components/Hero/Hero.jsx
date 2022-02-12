import React from 'react';

import { sliderItems } from '../../data';

import Tickets from '../Buttons/Tickets';

import {
  HeroImageContainer,
  HeroImage,
  InfoWrapper,
  Description,
} from '../../components/styles/Hero.styled';

import { InfoContainer, Title } from '../../components/styles/Hero.styled';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={4000}
    >
      {sliderItems.map((item) => (
        <HeroImageContainer>
          <HeroImage src={item.img} key={item} alt="show-images" />
          <InfoContainer>
            <Title>{item.name}</Title>
            <Description>{item.description}</Description>
            <Tickets />
          </InfoContainer>
        </HeroImageContainer>
      ))}
    </Carousel>
  );
};

export default Hero;
