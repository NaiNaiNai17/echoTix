import React from 'react';
import axios from '../../util/axiosInstance'

import {
  RegisterContainer,
  Wrapper,
  Title,
  Form,
  Input,
  ButtonContainer,
  GoogleButton,
  Button,
  Agreement,
} from '../styles/RegisterLogin';

const Register = () => {
   
  return (
    <RegisterContainer>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder="first name"></Input>
          <Input placeholder="last name"></Input>
          <Input placeholder="email"></Input>
          <Input placeholder="password"></Input>
          <Input placeholder="confirm password"></Input>
          <ButtonContainer>
            <GoogleButton>Sign in with Google</GoogleButton>
            <Button>Create</Button>
          </ButtonContainer>

          <Agreement>
            By creating an account, I consent to the proceeding of my personal
            data in accordance with <b>Privacy Policy</b>
          </Agreement>
        </Form>
      </Wrapper>
    </RegisterContainer>
  );
};

export default Register;
