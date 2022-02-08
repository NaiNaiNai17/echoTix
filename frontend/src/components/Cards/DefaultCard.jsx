import React from 'react';
import { Container, Image } from '../../components/styles/Card.styled';

const Card = ({ event }) => {
  return (
    <Container>
      <Image src={event.images.large.url} />
    </Container>
  );
};

export default Card;
