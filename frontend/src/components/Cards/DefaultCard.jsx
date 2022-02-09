import React from 'react';
import { Container, Image } from '../../components/styles/Card.styled';

const Card = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
    </Container>
  );
};

export default Card;
