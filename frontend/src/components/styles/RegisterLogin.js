import styled from 'styled-components/macro';
import { MdClose } from 'react-icons/md';
import { mobile } from '../../responsive';

export const RegisterContainer = styled.div.attrs(() => ({
  className: 'RegisterContainer',
}))`
  display: flex;
  justify-content: center;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');

  display: flex;
  align-items: center;
  ${mobile({
    height: '30rem',
  })};
`;

export const LoginContainer = styled.div.attrs(() => ({
  className: 'LoginContainer',
}))`
  z-index: 99;
  width: 100vw;
  height: 100vh;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-20%, -30%);
`;

export const Wrapper = styled.div.attrs(() => ({
  className: 'LoginWrapper',
}))`
  width: 30rem;
  padding: 35px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  ${mobile({
    width: '20rem',
  })};
`;

export const Title = styled.h1.attrs(() => ({
  className: 'Title',
}))`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

export const Form = styled.form.attrs(() => ({
  className: 'Form',
}))`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = styled.form.attrs(() => ({
  className: 'LoginForm',
}))`
  width: 70%;
  padding: 20px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Input = styled.input.attrs(() => ({
  className: 'Input',
}))`
  flex: 1;
  min-width: 65%;
  margin: 20px 10px 0px 0px;
  padding: 10px 45px;
  ::placeholder {
   color: black;
   text-align: center;
`;

export const ButtonContainer = styled.div.attrs(() => ({
  className: 'ButtonContainer',
}))`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: ;
  flex-direction: column;
`;

export const GoogleButton = styled.button.attrs(() => ({
  className: 'GoogleButton',
}))`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: #e7e5e5;
  border-radius: 20px;
  margin: 20px 10px 0px 0px;
  cursor: pointer;
`;

export const Button = styled.button.attrs(() => ({
  className: 'CreateButton',
}))`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: #30ab86;
  border-radius: 20px;
  margin: 20px 10px 0px 0px;
  cursor: pointer;
`;

export const Agreement = styled.span.attrs(() => ({
  className: 'Agreement',
}))`
  font-size: 12px;
  margin: 20px 0px;
  text-align: center;
`;

export const CloseLoginButton = styled(MdClose)`
  cursor: pointer;
  position: relative;
  top: 0px;
  left: 0px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  cursor: pointer;
`;

export const RegisterButton = styled.button.attrs(() => ({
  className: 'RegisterButton',
}))`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: #201d1d;
  color: white;
  border-radius: 20px;
  margin: 20px 10px 0px 0px;
  cursor: pointer;
`;
