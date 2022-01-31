import React from 'react';

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
        {/* <Title>{item.event}</Title> */}
      </Info>
    </SubheroItemContainer>
  );
};

export default SubheroItem;
