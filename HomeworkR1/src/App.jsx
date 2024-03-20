import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <a href="https://feit.ukim.edu.mk/" target="_blank">
      <img src='data:image/png;base64,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' className="feit" alt="React feit"></img>
      </a>
    </div>
    <p id='ljochev'>
          Kostadin Ljochev
        </p>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My first Vite + React project</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
    </>
  )
}

export default App
