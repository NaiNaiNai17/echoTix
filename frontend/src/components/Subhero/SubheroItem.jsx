import React from 'react';

import Tickets from '../Buttons/Tickets';

//* Style Components
import {
  SubheroItemContainer,
  Image,
  Info,
  Title,
} from '../../components/styles/SubheroItem.styled';

const SubheroItem = ({ item }) => {
  return (
    <SubheroItemContainer>
      <Image src={item.img} key={item.id} />
      <Info>
        <Title>{item.name}</Title>
        <p>My Description Info</p>
        <a href={item.url}>
          <Tickets />
        </a>
      </Info>
    </SubheroItemContainer>
  );
};

export default SubheroItem;
