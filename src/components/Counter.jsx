import React, { useState } from 'react'

const Counter = () => {
  //logic


  /** counter라는 변수를 만든다   ===useState 사용하나면 충분하다구 - 
   * counter의 초기값을 0으로 지정한다
   * counter의 값을 UI에 보여준다
   * increase 함수를 만든다
   * 사용자가 +1 버튼을 클릭하면 increase 함수가 실행된다
   * increase 함수를 정의한다 : counter라는 변수의 값이 1 증가한다
   * increase 함수를 정의한다 : counter라는 변수의 값이 10 미만인 경우에만
   * counter의 값이 1증가한다.
   * 숫자가 +1 이 되어 변경되는 것을 확인한다
   * 
   * 
   * 사용자가 +1 버튼을 클릭한다
  */

  const [counter, setCounter] = useState(0);

  const increase = () => {

    if (counter <10 ) {
      
      setCounter(counter+1);

    } else if(counter === 10) {

      setCounter("그만눌러 이녀석아")


    }
    

  }

  const decrease = () => {

    if (counter>0) {

      setCounter((prev)=> prev-1);
    }
 
  }



  /**
   * 1. 
   * 2. counter 라는 초기값 0으로 지정된 변수를 만든다
   *    +버튼의 이벤트를 넣는다
   * 3. 이벤트는 숫자 1을 더하는 함수이다 (최대값 10, 최소값 0)
   * 4. 사용자가 +버튼을 클릭한다
   * 
   * + 1이 된 변경된 숫자를 h1 태그에 넣는다
   * 5. 변경된 숫자가 counter-number에 반영된다
   * 6. -버튼도 똑같이 넣는다
   * */




  

  //view

  return (
    <>
    
    <div className='counter-box'>
    <div className='counter-title'>My Counter</div>

    <h1 className='counter-number'>{counter}</h1>

    <button type='button' className='counter-plus-button' onClick={increase}>+</button>
    <button type='button' className='counter-minus-button' onClick={decrease}>-</button>
    
    <p className='counter-description'>
      +버튼을 누르면 +1 <br></br> 
      -버튼을 누르면 -1 <br></br>
      아주 간단한 기능이지만 <br></br>
      리액트 문법을 익히는데 <br></br>
      아주 중요하다 이말이야

    </p>

    </div>
    


    </>
  )
}

export default Counter