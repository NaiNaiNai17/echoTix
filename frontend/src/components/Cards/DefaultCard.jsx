import React from 'react';
import {
  DefaultCardContainer,
  Image,
  Info,
  Title,
} from '../../components/styles/DefaultCard.styled';

const DefaultCard = ({ item }) => {
  return (
    <DefaultCardContainer>
      <Image src={item.img} />
      <Info>
        <Title>{item.name}</Title>
      </Info>
    </DefaultCardContainer>
  );
};

export default DefaultCard;
