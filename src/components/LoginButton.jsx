import React, { useState } from 'react'

const LoginButton = ({text, onClick, className, disabled}) => {



  return (
    <button type='button' onClick={onClick} className={className} 
    disabled={disabled}>{text}</button>
  )
}

export default LoginButton