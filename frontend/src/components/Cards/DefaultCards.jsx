import React, { useState, useEffect } from 'react';
import FlipCard from '../../components/Cards/DefaultCard';
import { squareCards } from '../../data';
import { DefaultCardsContainer } from '../../components/styles/DefaultCards.styled';
import axios from '../../util/axiosInstance';

const DafaultCards = () => {
  return (
    <DefaultCardsContainer className="Projects">
      {squareCards.map((item) => (
        <FlipCard item={item} key={item.id} />
      ))}
    </DefaultCardsContainer>
  );
};

export default DafaultCards;
