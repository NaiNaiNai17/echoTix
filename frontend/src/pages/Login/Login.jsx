import React from 'react';
import axios from '../../util/axiosInstance';
import { useNavigate } from 'react-router-dom';

import {
  RegisterContainer,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
} from '../../components/styles/RegisterLogin';

const Login = () => {
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      const response = await axios.post(
        'http://localhost:3001/user/login',
        data
      );

      navigate('/');
    } catch (error) {
      console.log(error, 'cannot log user in');
    }

    // setTimeout(()=>{
    //   navigate('/')
    // })
  };

  return (
    <RegisterContainer>
      <Wrapper>
        <Title>Login</Title>
        <Form onSubmit={submitHandler}>
          <Input name="email" placeholder="email"></Input>
          <Input name="password" placeholder="password"></Input>

          <Button type="submit">Login</Button>
        </Form>
      </Wrapper>
    </RegisterContainer>
  );
};

export default Login;
