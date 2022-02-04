import React from 'react';
import axios from '../../util/axiosInstance'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  const onSubmitHandle = async (e) =>{
    e.preventDefault()

    const formData = new FormData(e.target)

    const data = {
      email: formData.get('email-address'),
      password:formData.get('password')
    }

    try {
      const response = await axios.post('http://localhost:3001/user/login', data)
      console.log('user is logged in')
      navigate('/')
      
    } catch (error) {
      console.log(error, 'cannot log user in')
    }
  }

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
            <LoginForm onSubmit={onSubmitHandle} >
              <Input placeholder="email" name="email-address" id="email-address" type="email"></Input>
              <Input placeholder="password" name="password" id="password" type="password"></Input>
              <ButtonCotainer>
                <GoogleButton>Login in with Google</GoogleButton>
                <Button onChange={onSubmitHandle}>Login</Button>
              </ButtonCotainer>
            </LoginForm>
          </Wrapper>
        </LoginContainer>
      ) : null}
    </>
  );
};

export default Login;
