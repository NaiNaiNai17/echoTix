import React from 'react';
import {
  DefaultCardContainer,
  Image,
} from '../../components/styles/DefaultCard.styled';

const DefaultCard = ({ item }) => {
  return (
    <DefaultCardContainer>
      <Image src={item.img} />
    </DefaultCardContainer>
  );
};

export default DefaultCard;
