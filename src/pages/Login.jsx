import React from 'react';


import LoginButton from '../components/LoginButton';
import PassWord from '../components/PassWord';
import SocialButton from '../components/SocialButton';
import InputField from '../components/InputField';





const Login = () => {
  return (

    
    <div className='login-box'>
      <h1 className='login-title'>로그인</h1>
      <InputField />
      <PassWord />
      <LoginButton />
      <p className='no-id'>계정이 없으신가요? <a href='#'>가입하기</a> </p>
      <p>or</p>
      <SocialButton />

    </div>
  )
};

export default Login