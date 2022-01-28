import React from 'react';
import PicOne from '../../assets/images/Melt_1440x450.png';
import PicTwo from '../../assets/images/Bonobo_1440x450.jpg';
import PicThree from '../../assets/images/Dukeland_1440x450.jpg';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      interval={500}
    >
      <div>
        <img src={PicOne} />
      </div>
      <div>
        <img src={PicTwo} />
      </div>
      <div>
        <img src={PicThree} />
      </div>
    </Carousel>
  );
};

export default Hero;
