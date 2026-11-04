import { useNavigate } from 'react-router-dom'

function Doctorcard({ name, gender, specialization, id }) {
  const navigate = useNavigate()

  return (
    <div>
      <div>
        <img
          width="100"
          src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
          alt="Doctor"
        />
      </div>

      <h3>{name}</h3>
      <p>{gender}</p>
      <p>{specialization}</p>

      <button onClick={() => navigate(`/doctors/${id}`)}>
        View Details
      </button>
    </div>
  )
}

export default Doctorcard