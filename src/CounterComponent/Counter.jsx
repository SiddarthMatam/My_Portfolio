import {React, useState} from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0);
    function decrCount() {
      setCount(count => count - 1);
    }          
    function incrCount() {
      setCount(count => count + 1);
    }
    function reset() {
      setCount(0);
    }
  return (
      <div className="total-container">
        <h1 className="main-heading">Counter</h1>
        <button className='sub-btn' onClick={decrCount}>-</button>
        <span className="counter">{count}</span>
        <button className='add-btn' onClick={incrCount}>+</button><br/><br/>
        <button className="reset-btn" onClick={reset}>Reset</button>
      </div>
  )
};
export default Counter
