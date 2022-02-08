import React from 'react';

import {
  NoContainer,
  NotFoundH1,
  NotFoundCountainer,
} from '../../components/styles/NoShowsNotFound.styled';

const NotFound = () => {
  return (
    <NoContainer>
      <NotFoundCountainer>
        <NotFoundH1>ERROR 404</NotFoundH1>
      </NotFoundCountainer>
    </NoContainer>
  );
};

export default NotFound;
