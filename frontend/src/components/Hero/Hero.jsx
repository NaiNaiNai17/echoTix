import React, { useEffect, useContext } from 'react';
import axios from '../../util/axiosInstance';

//* IMPORT DATA______________________________
import { sliderItems } from '../../data';
import { SearchContext } from '../../hoc/MainRouter';

//* IMPORT REACT-ROUTER_______________________
import { useNavigate } from 'react-router-dom';

//* IMPORT COMPONENTS_________________________
import Tickets from '../Buttons/Tickets';

//* IMPORT STYLE COMPONENTS___________________
import {
  HeroImageContainer,
  HeroImage,
  Description,
} from '../../components/styles/Hero.styled';

import { InfoContainer, Title } from '../../components/styles/Hero.styled';

//* IMPORT CAROUSEL___________________________
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  // const { dataName } = useContext(SearchContext);
  // const navigate = useNavigate();

  //* DataName Function
  // const getDataFileName = async () => {
  //   try {
  //     const response = await axios.get(
  //       `/shows/events?attractionIDs=${dataName}`
  //     );
  //   } catch (error) {}
  // };

  // const nameHandler = async (e) => {
  //   e.preventDefault();
  //   getDataFileName();
  //   // navigate(`/eventdails${dataName}`);
  // };

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
            <a href={item.url}>
              <Tickets />
            </a>
          </InfoContainer>
        </HeroImageContainer>
      ))}
    </Carousel>
  );
};

export default Hero;
