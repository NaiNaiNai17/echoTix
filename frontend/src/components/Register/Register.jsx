import React, {useState} from 'react';
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
  const [registrationCompleted, setRegistrationCompleted] = useState(false)
  const [errorHappened, setErrorHappened] = useState(false)
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

      setRegistrationCompleted(true)
      setTimeout(()=>{
      
      navigate('/')
    }, 2000)

    } catch (error) {
      setErrorHappened(true)
      console.log(error, 'cannot log user in');
    }
    
    
  }

  
   
  return (
    <RegisterContainer>
      <Wrapper>
        {registrationCompleted ? <h1>Registration Complete</h1> : null}
        <Title>Create an Account</Title>
        {errorHappened ? <h1 style={{color: 'red'}}>There was an error completing registration</h1> : null}
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
