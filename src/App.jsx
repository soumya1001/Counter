import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const decreaseHandler = ()=>{
    if (count > 0) {
      setCount(count-1)
    }
  }
  const increaseHandler= ()=>{
      setCount(count+1)
  }
  const resetHandler = ()=>{
    setCount(0)
  }
  return (
    <>
      <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-[#42ce88]'>
        <h1 className='text-lg font-bold'>Increment & Decrement</h1>
        <div className='flex flex-row items-center bg-white py-2 m-2 rounded-sm'>
          <button onClick={decreaseHandler} className='px-4 text-lg font-bold border-r-2 '>
            -
          </button>
          <div className='px-4 text-lg font-bold'>
            {count}
          </div>
          <button onClick={increaseHandler} className='px-4 text-lg font-bold border-l-2'>
            +
          </button>
        </div>
        <button onClick={resetHandler} className='bg-blue-500 text-white px-2 rounded-sm text-lg font-medium'>Reset</button>
      </div>
    </>
  )
}

export default App