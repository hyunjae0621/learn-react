import React from 'react'
 
const InputField = ({type, placeholder,label}) => {
  return (

    <input label={label} type={type} placeholder={placeholder} className='InputField'/>
  );
}

export default InputField