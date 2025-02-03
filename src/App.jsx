import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[number,setNumber] =useState(1);

  const IncreaseCount=()=>{
    setCount((prevValue)=> prevValue + number)
  }
  const DecreaseCount=()=>{
    if(count >0) setCount((prevValue)=> (prevValue - number < 0 ? 0 : prevValue - number))
  }
 const ResetCount=()=>{
   setCount(0);
   setNumber(1)
 }

 const handleChange=(e)=>{
   const value=Number(e.target.value);
   setNumber(value)
   
 }
  return (
    <>
      <div>
       
        <h1>Counter:</h1>
        <span>{count}</span>
        <button onClick={IncreaseCount}>+</button>
        <button onClick={DecreaseCount}>-</button>
       
       </div>
       <h1>Increment Number By:</h1>
       <input type="number" value={number}  onChange={handleChange} />
       
        <button onClick={ResetCount}>Reset</button>
    </>
  )
}

export default App
