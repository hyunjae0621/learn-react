import React from 'react'

const CardButton = ({onCardButtonClick}) => {


  //logic
  const handleClick = () => {
    console.log("카드버튼 클릭!!");
    onCardButtonClick();
  }


  //view

  return (
    <button type='button' className='card-button' 
    onClick={handleClick}>Go Somewhere</button>
  )
}

export default CardButton