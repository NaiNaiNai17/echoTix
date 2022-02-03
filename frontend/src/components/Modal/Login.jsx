import React from 'react';
import axios from '../../util/axiosInstance';

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
  RegisterButton,
} from '../styles/RegisterLogin';

const submitHandler = (e) => {
  e.preventDefault();
  console.log('submit');
};

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
                <Button submitHandler={submitHandler}>Login</Button>
                <GoogleButton>Login in with Google</GoogleButton>

                <RegisterButton>Register</RegisterButton>
              </ButtonCotainer>
            </LoginForm>
          </Wrapper>
        </LoginContainer>
      ) : null}
    </>
  );
};

export default Login;
