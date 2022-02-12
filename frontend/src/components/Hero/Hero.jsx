import React from 'react';

import { sliderItems } from '../../data';

import {
  HeroImageContainer,
  HeroImage,
} from '../../components/styles/Hero.styled';

import { Title, Info } from '../../components/styles/SubheroItem.styled';

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
          <HeroImage
            style={{
              height: '15rem',
              objectFit: 'cover',
            }}
            src={item.img}
            key={item}
            alt="show-images"
          />
          <Info>
            <Title>{item.name}</Title>
          </Info>
        </HeroImageContainer>
      ))}
    </Carousel>
  );
};

export default Hero;
