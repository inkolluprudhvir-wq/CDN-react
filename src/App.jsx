import Navbar from './components/Navbar'
import Section from './components/Section'
import './components/styles.css'
import Doctorcard from './components/Doctorcard'
import Addnewdoctor from './components/Addnewdoctor'
import { useState, useEffect } from 'react'

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
      <Section />

      <div className="doctorcontainer">
        <Doctorcard name="John" gender="male" specialization="Bones Specialist" />
        <Doctorcard name="Jessy" gender="female" specialization="Heart Specialist" />
        <Doctorcard name="Jack" gender="male" specialization="Muscles Specialist" />
        <Doctorcard name="Jane" gender="female" specialization="Neurology" />
        <Doctorcard name="Jorden" gender="male" specialization="Orthopedic" />
      </div>

      <Addnewdoctor />
    </div>
  )
}

export default App