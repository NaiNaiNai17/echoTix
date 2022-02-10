import React, { useState, useEffect } from 'react';
import DefaultCard from '../../components/Cards/DefaultCard';
import { squareCards } from '../../data';
import { DefaultCardsContainer } from '../../components/styles/DefaultCards.styled';
import axios from '../../util/axiosInstance';

const DafaultCards = () => {
  return (
    <DefaultCardsContainer>
      {squareCards.map((item) => (
        <DefaultCard item={item} key={item.id} />
      ))}
    </DefaultCardsContainer>
  );
};

export default DafaultCards;
