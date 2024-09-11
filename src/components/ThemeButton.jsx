import React, { useEffect } from 'react'

const ThemeButton = ({isDarkmode, onTheme}) => {
  



  useEffect(() => {
    console.log(isDarkmode? "다크모드" : "라이트모드")

  },[isDarkmode]);
  
  return (

    <button type='button' onClick={onTheme}>현재 상태 : {isDarkmode ? "다크모드":"라이트모드"}</button>
  );
}

export default ThemeButton