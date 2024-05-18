import { useState } from 'react'
import miniLogo from './assets/mini-logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Mini Counter</h1>

      <div>
        <a href="https://www.miniusa.com/" target="_blank">
          <img src={miniLogo} className="logo" alt="Mini logo" />
        </a>
      </div>
  
      <h2>{count}</h2>
      <div className="card buttons">
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <button onClick={() => setCount(0)}>
          c
        </button>
      </div>
    </>
  )
}

export default App
