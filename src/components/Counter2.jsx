import React, { useState } from 'react'

const Counter2 = () => {

    const min = 0;
    const max = 10;

    const [count, setCount] = useState(0);
  
    

  const increment = () => {

    setCount(count +1);
  }

  const decrement = () => {

    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);

  }


  return (
    <div>
      
      
      <h2>Counter2</h2>
      <p>Count : {count} </p>
      <button onClick={decrement} disabled={count===min}>-</button>
      <button onClick={increment} disabled={count===max}>+</button>
      <button onClick={reset} > reset</button>
      
      </div>
  )

}


export default Counter2