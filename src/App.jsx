import { useState } from 'react'
import reactLogo from './assets/react.svg'
import compLogo from './assets/computer.svg'
import viteLogo from '/vite.svg'
import girl from '/girl.avif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={girl} className="logo" alt="Vite logo" />
        </a>
        <a href="" target="_blank">
          <img src={compLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>I am Henriette</h1>
     
    </>
  )
}

export default App
