import React from 'react';
import SubheroItem from '../../components/Subhero/SubheroItem';

//* Data Array
import { subheroItems } from '../../data';

//* Style Components
import { SubheroContainer } from '../../components/styles/Subhero.styled';

const Subhero = () => {
  return (
    <SubheroContainer>
      {subheroItems.map((item) => (
        <SubheroItem item={item} key={item.id} />
      ))}
    </SubheroContainer>
  );
};

export default Subhero;
