import React from 'react';
import {
  MainCardContainer,
  CardContainer,
  Eventname,
  ImageContainer,
  Image,
  ShowCount,
} from '../../components/styles/Card.styled';

const Card = ({ event, onEventClicked }) => {
  console.log('image', event);
  return (
    <MainCardContainer
      onClick={() => onEventClicked(event)}
      img={
        !event.images
          ? 'https://images.unsplash.com/photo-1595971294624-80bcf0d7eb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
          : event.images.standard.url
          ? event.images.standard.url
          : event.images.large.url
      }
    >
      {event ? (
        <CardContainer>
          <h2>Top Search Results:</h2>
          <hr />
          <Eventname>{event.name}</Eventname>
          <ImageContainer>
            <Image
              src={
                !event.images
                  ? 'https://images.unsplash.com/photo-1595971294624-80bcf0d7eb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
                  : event.images.standard.url
                  ? event.images.standard.url
                  : event.images.large.url
              }
            />
            <ShowCount>
              {event.event_count > 0
                ? `${event.event_count} Shows available`
                : 'There are No Shows available'}
            </ShowCount>
          </ImageContainer>
        </CardContainer>
      ) : (
        ''
      )}
    </MainCardContainer>
  );
};

export default Card;
