import React from 'react';

import {
  RegisterContainer,
  RegisterWrapper,
} from '../../components/styles/Register.styled';

const Register = () => {
  return (
    <RegisterContainer>
      <RegisterWrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder="first name"></Input>
          <Input placeholder="last name"></Input>
          <Input placeholder="email"></Input>
          <Input placeholder="password"></Input>
          <Input placeholder="confirm password"></Input>
          <GoogleButton>Sign in with Google</GoogleButton>
          <CreateButton>Create</CreateButton>
        </Form>
      </RegisterWrapper>
    </RegisterContainer>
  );
};

export default Register;
