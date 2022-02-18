import React from 'react';
import ReactCardFlip from 'react-card-flip';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import { CardTicketButton } from '../../components/styles/Buttons/Tickets.styled';

import {
  FrontContainer,
  Bandname,
  BackContainer,
  Cities,
  Date,
  BackInfoContainer,
} from '../styles/DefaultCard.styled';

const FlipCard = ({ item }) => {
  // const [isFlipped, setIsFlipped] = React.useState(false);
  return (
    <Flippy
      flipOnHover={true} // default false
      flipOnClick={false} // default false
      flipDirection="horizontal" // horizontal or vertical
      style={{ width: '300px', height: '300px', padding: '20px' }} /// these are optional style, it is not necessary
    >
      <FrontSide>
        <FrontContainer img={item.img} className="CardFront">
          <Bandname>{item.name}</Bandname>
        </FrontContainer>
      </FrontSide>
      <BackSide>
        <BackContainer img={item.img} className="CardBack">
          <BackInfoContainer>
            <ul>
              {item.cities.map((city) => (
                <li>
                  {city.city} - {city.date}
                </li>
              ))}
            </ul>
          </BackInfoContainer>
          <CardTicketButton>
            <a
              href={item.url}
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Tickets
            </a>
          </CardTicketButton>
        </BackContainer>
      </BackSide>
    </Flippy>
  );
};

export default FlipCard;
