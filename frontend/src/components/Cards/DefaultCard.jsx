import { findLastIndex } from 'lodash';
import React from 'react';
import ReactCardFlip from 'react-card-flip';

import { CardTicketButton } from '../../components/styles/Buttons/Tickets.styled';

import { Image, FrontBackContainer } from '../styles/DefaultCard.styled';

const FlipCard = ({ item }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <FrontBackContainer
        onMouseEnter={() => setIsFlipped((prev) => !prev)}
        className="CardFront"
      >
        <Image>
          <p>{item.name}</p>
        </Image>
      </FrontBackContainer>
      <FrontBackContainer
        img={item.img}
        alt=""
        onMouseLeave={() => setIsFlipped((prev) => !prev)}
        className="CardBack"
      >
        <Image>
          <CardTicketButton>Tickets</CardTicketButton>
        </Image>
      </FrontBackContainer>
    </ReactCardFlip>
  );

  // return (

  // <DefaultCardContainer>
  //   <Card img={item.img}>
  //     <Front>{item.name}</Front>
  //     <Back>
  //       <TicketButton>Tickets</TicketButton>
  //     </Back>
  //   </Card>

  // {
  /* <Image src={item.img} />
      <Title>{item.name}</Title>
      <TicketButton>Tickets</TicketButton> */
  // }
  // </DefaultCardContainer>
  // );
};

export default FlipCard;
