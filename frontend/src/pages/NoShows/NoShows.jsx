import React from 'react';

import { NoShowsContainer, NoShowMessage } from '../../components/styles/NoShows.styled';

const Register = () => {
  return (
    <NoShowsContainer>
      <NoShowMessage>
        Unfortuantely There are No Shows for "This Artist" available right now!
      </NoShowMessage>
    </NoShowsContainer>
  );
};

export default Register;
