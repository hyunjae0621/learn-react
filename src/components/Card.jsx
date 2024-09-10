//rafce 치면 자동완성으로 아래 처럼 나옴. 

import React from 'react'
import CardButton from './CardButton';

const Card = ({title, subText, onCardClick}) => {
  // logic
const handleClick = () =>{
  console.log("카드 클릭!!!");
  onCardClick();

}
const myname = "장현재";
// const subText = "카드 서브텍스트입니다";
  // view
  return (
    <div className="card">
      <h5 className="card-title">
        {title}
      </h5>
    <p className='card-description'>{subText}</p>
    <CardButton onCardButtonClick={handleClick}/>
    


    </div>
  )
}

export default Card

