import React from 'react';

import {
  Container,
  Wrapper,
  Title,
  LoginForm,
  Input,
  ButtonCotainer,
  GoogleButton,
  Button,
} from '../styles/RegisterLogin';

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <LoginForm>
          <Input placeholder="email"></Input>
          <Input placeholder="password"></Input>

          <ButtonCotainer>
            <GoogleButton>Login in with Google</GoogleButton>
            <Button>Login</Button>
          </ButtonCotainer>
        </LoginForm>
      </Wrapper>
    </Container>
  );
};

export default Register;
