import React from 'react';
import axios from '../../util/axiosInstance'
import {useNavigate} from 'react-router-dom'

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
const navigate = useNavigate()
  const submitHandler= async (e) =>{
    e.preventDefault();
    
   const formData = new FormData(e.target);

    const data = {
      firstname:formData.get('firstname'),
      lastname:formData.get('lastname'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword:formData.get('confirmpassword')

    };

    try {
      const response = await axios.post(
        'http://localhost:3001/user/register',
        data
      );
      
      navigate('/');

    } catch (error) {
      console.log(error, 'cannot log user in');
    }
    
    // setTimeout(()=>{
    //   navigate('/')
    // })
  }

  
   
  return (
    <RegisterContainer>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form onSubmit={submitHandler}>
          <Input  name="firstname"  placeholder="first name"></Input>
          <Input name="lastname"  placeholder="last name"></Input>
          <Input  name="email" placeholder="email"></Input>
          <Input name="password"  placeholder="password"></Input>
          <Input  name="confirmpassword" placeholder="confirm password"></Input>
          <Button type="submit" >Register</Button>
          <ButtonContainer>
            <GoogleButton>Sign in with Google</GoogleButton>
           
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
