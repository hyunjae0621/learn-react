import React from 'react';


import LoginButton from '../components/LoginButton';
// import PassWord from '../components/PassWord';
// import SocialButton from '../components/SocialButton';
import InputField from '../components/InputField';





const Login = () => {
  return (

    
    <div className='login-box'>
      <h1 className='login-title'>로그인</h1>
      <InputField label="이메일" type="Text" placeholder="이메일"/>
      <InputField label="비밀번호" type="password" placeholder="비밀번호"/>
      
      <LoginButton text="Login" onClick={() => console.log("로그인 클릭")}
        className="Loginbutton" disabled=""/>


      <p className='no-id'>계정이 없으신가요? <a href='#'>가입하기</a> </p>
      <p>or</p>
      <LoginButton text="continue on Google" className="SocialButton" onClick={ () => console.log('google 로그인 클릭')} />

    </div>
  )
};

export default Login