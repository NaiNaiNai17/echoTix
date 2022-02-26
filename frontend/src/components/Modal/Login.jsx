import React, { useContext} from 'react';
import axios from '../../util/axiosInstance';
import { useNavigate } from 'react-router-dom';
import {SearchContext} from '../../hoc/MainRouter'

import {
  LoginContainer,
  Wrapper,
  Title,
  LoginForm,
  Input,
  ButtonContainer,
  GoogleButton,
  Button,
  CloseLoginButton,
  RegisterButton,
} from '../styles/RegisterLogin';


const Login = ({ showModal, setShowModal }) => {
  const {setLoggedIn, loggedIn} = useContext(SearchContext)
  const navigate = useNavigate();

const submitHandler = (e) => {
  e.preventDefault()
  setShowModal(false)
  navigate('/register')
 
};

  const onSubmitHandle = async (e) => {
    e.preventDefault();


    const formData = new FormData(e.target);

    const data = {
      email: formData.get('email-address'),
      password: formData.get('password'),
    };

    try {
      const response = await axios.post(
        'http://localhost:3001/user/login',
        data
      );
      setShowModal(false);
      setLoggedIn(true);
      console.log('user is logged in');
     

    } catch (error) {
      console.log(error, 'cannot log user in');
    }
  };

  return (
    <>
      {showModal ? (
        <LoginContainer>
          <Wrapper>
            <CloseLoginButton
              aria-label="Close Login"
              onClick={() => setShowModal(false)}
            />
            <Title>Login</Title>
            <LoginForm onSubmit={onSubmitHandle}>
              <Input
                placeholder="email"
                name="email-address"
                id="email-address"
                type="email"
              ></Input>
              <Input
                placeholder="password"
                name="password"
                id="password"
                type="password"
              ></Input>

              
                <Button >Login</Button>
                </LoginForm>
              
                <RegisterButton onClick={submitHandler}>Register</RegisterButton>
             
            
          </Wrapper>
        </LoginContainer>
      ) : null}
    </>
  );
};

export default Login;
