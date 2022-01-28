import React from 'react';
import Card from '../../components/Cards/Card';
import { squareCards } from '../../data';
import { Container } from '../../components/styles/Cards.styled';

const Cards = () => {
  return (
    <Container>
      {squareCards.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Cards;
