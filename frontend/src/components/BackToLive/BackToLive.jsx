import React from 'react';

import BackToLiveImage from '../../assets/images/backtolive.png';

import { ImageContainer } from '../../components/styles/BackToLive';

const BackToLive = () => {
  return (
    <ImageContainer>
      <img src={BackToLiveImage} alt="back-to-live" />
    </ImageContainer>
  );
};

export default BackToLive;
