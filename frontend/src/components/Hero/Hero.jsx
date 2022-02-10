import React from 'react';
import PicOne from '../../assets/images/Melt_1440x450.png';
import PicTwo from '../../assets/images/Bonobo_1440x450.jpg';
import PicThree from '../../assets/images/Dukeland_1440x450.jpg';

import { sliderItems } from '../../data';

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
      interval={10000}
    >
      {sliderItems.map((item) => (
        <div>
          <img
            style={{ height: '250px' }}
            src={item.img}
            key={item}
            alt="show-images"
          />
        </div>
      ))}

      {/* <div>
        <img src={PicOne} alt="Melt" />
      </div>
      <div>
        <img src={PicTwo} alt="Bonobo" />
      </div>
      <div>
        <img src={PicThree} alt="Dukeland" />
      </div> */}
    </Carousel>
  );
};

export default Hero;

