
import { useState } from 'react'
import './App.css'
import Router from "./Router/index"
import context from './context/context'
function App() {
  const [count, setCount] = useState(0)

  return (
  <context.Provider value={""}>
      <div className="App">
      <Router/>
    </div>
  </context.Provider>
  )
}

export default App