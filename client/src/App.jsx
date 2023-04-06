
import { useState } from 'react'
import './App.css'
import Router2 from "./Router/index"
import context from './context/context'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './Pages/Home/Home'
import Navbar from './UI/Navbar/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <context.Provider value={""}>
      <Navbar />

      <div className='app'>
        <Sidebar />
        <Router2 />
      </div>
    </context.Provider>
  )
}

export default App