import {useState} from 'react'
import './Calculator.css'

function Calculator() {
  const [number, setNumber] = useState("");
  const [backup, setBackup] = useState("");

  const controller = event => {
    setNumber(event.target.value);
  }

  const clear = () =>{
    setNumber("");
    setBackup("");
  }
  
  const del =() => {
    if (number.length <= 1) {
      setNumber("");
    } else {
      setNumber(number.slice(0, -1));
    }
  }
  
  const add = () =>{
    setBackup(backup+String(number) + "+");
    setNumber("");
  }
  
  const sub = () => {
    setBackup(backup+String(number) + "-");
    setNumber("");
  }
  
  const mul = () => {
    setBackup(backup+String(number) + "*");
    setNumber("");
  }
  
  const div = () => {
    setBackup(backup+String(number) + "/");
    setNumber("");
  }
  
  const modulos = () => {
    setBackup(backup+String(number) + "%");
    setNumber("");
  }

  return (
    <div className='container'>
      <input className='input-box' type="text" value={number} name="number" onChange={controller}/><br/>
      <div>
        <button className="btn operation" onClick={clear}>C</button>
        <button className='btn operation' onClick={modulos}>P</button>
        <button className='btn operation' onClick={del}>D</button>
        <button className='btn operation' onClick={div}>/</button>
      </div>
      <div>
        <button className='btn nums' onClick={() => setNumber(number+'7')}>7</button>
        <button className='btn nums' onClick={() => setNumber(number+'8')}>8</button>
        <button className='btn nums' onClick={() => setNumber(number+'9')}>9</button>
        <button className='btn operation' onClick={mul}>*</button>
      </div>
      <div>
        <button className='btn nums' onClick={() => setNumber(number+'4')}>4</button>
        <button className='btn nums' onClick={() => setNumber(number+'5')}>5</button>
        <button className='btn nums' onClick={() => setNumber(number+'6')}>6</button>
        <button className='btn operation' onClick={sub}>-</button>
      </div>
      <div>
        <button className='btn nums' onClick={() => setNumber(number+'1')}>1</button>
        <button className='btn nums' onClick={() => setNumber(number+'2')}>2</button>
        <button className='btn nums' onClick={() => setNumber(number+'3')}>3</button>
        <button className='btn operation' onClick={add}>+</button>
      </div>
      <div>
        <button className='btn nums' onClick={() => setNumber(number+'00')}>00</button>
        <button className='btn nums' onClick={() => setNumber(number+'0')}>0</button>
        <button className='btn nums' onClick={() => setNumber(number+'.')}>.</button>
        <button className='btn calc' onClick={() => setNumber(eval(backup + String(number)))}>=</button>
    </div>
    </div>
  )
}

export default Calculator