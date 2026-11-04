import { useNavigate } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()

  return (
    <header>
      <h1>Doctor app</h1>
      <div>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/adddoctor')}>Add doctor</button>
      </div>
    </header>
  )
}

export default Navbar