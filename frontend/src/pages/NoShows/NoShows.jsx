import React from 'react';

import {
  NoContainer,
  NoShowMessage,
} from '../../components/styles/NoShowsNotFound.styled';

const Register = () => {
  return (
    <NoContainer>
      <NoShowMessage>
        Unfortuantely there are no Shows for "This Artist" available right now!
      </NoShowMessage>
    </NoContainer>
  );
};

export default Register;
