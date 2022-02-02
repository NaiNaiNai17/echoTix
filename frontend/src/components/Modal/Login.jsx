import React from 'react';

import {
  LoginContainer,
  Wrapper,
  Title,
  LoginForm,
  Input,
  ButtonCotainer,
  GoogleButton,
  Button,
  CloseLoginButton,
} from '../styles/RegisterLogin';

const Login = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <LoginContainer>
          <Wrapper>
            <CloseLoginButton
              aria-label="Close Login"
              onClick={() => setShowModal((prev) => !prev)}
            />
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
        </LoginContainer>
      ) : null}
    </>
  );
};

export default Login;
