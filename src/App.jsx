import Navbar from './components/Navbar'
import Section from './components/Section'
import './components/styles.css'
import Doctorcard from './components/Doctorcard'
import Addnewdoctor from './components/Addnewdoctor'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Doctordetails from './components/Doctordetails'
function App() {
  let [c, setC] = useState(0)
  let [count, setCount] = useState(0)

  useEffect(() => {
    console.log('api call running')
  }, [count])

  return (
    <div>
      {c}
      <button onClick={() => setC(c + 1)}>inc c</button>

      {count}
      <button onClick={() => setCount(count + 1)}>inc count</button>

      <Navbar />

      <Routes>
        <Route path='/' element={<Section />} />
        <Route path='/adddoctor' element={<Addnewdoctor />} />
        <Route path='/doctors/:id' element={<Doctordetails />} />
      </Routes>
    </div>
  )
}

export default App