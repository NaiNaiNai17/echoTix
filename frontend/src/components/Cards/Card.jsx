import React from 'react';
import {
  CardContainer,
  Eventname,
  ImageContainer,
  Image,
} from '../../components/styles/Card.styled';

const Card = ({ event }) => {
  return (
    <>
      {event ? (
        <CardContainer img={event.images.large.url}>
          <h2>Top Search Results:</h2>
          <hr />
          <Eventname>{event.name}</Eventname>
          <ImageContainer>
            <Image src={event.images.large.url} />
          </ImageContainer>
        </CardContainer>
      ) : (
        ''
      )}
    </>
  );
};

export default Card;
