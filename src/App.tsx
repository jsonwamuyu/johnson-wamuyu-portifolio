import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h4 className="font-bold text-7xl">Welcome home </h4>
      <p className="text-sm text-gray-400">This must be awesome to look at today.</p>
     </div>
    </>
  )
}

export default App
