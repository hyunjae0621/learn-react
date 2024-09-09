//rafce 치면 자동완성으로 아래 처럼 나옴. 

import React from 'react'

const Card = () => {
  // logic

const myname = "장현재";

  // view
  return (
    <div className="card">
      <h5 className="card-title">
        {myname} 입니다.
      </h5>
    <p className='card-description'>카드 제목을 기반으로 하여 카드 내용의 대부분을 구성할 수 있는 간단한 텍스트 입니다</p>

    <button type='button' className='card-button'>Go Somewhere</button>


    </div>
  )
}

export default Card

