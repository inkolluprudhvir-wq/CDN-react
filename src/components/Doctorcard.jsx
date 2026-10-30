

function Doctorcard(props) {
  return (
    <div>
      <div>
        <img
          width="100"
          src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
          alt="Doctor"
        />
      </div>
      <h3>{props.name}</h3>
      <p>{props.gender}</p>
      <p>{props.specialization}</p>
      <button>View Details</button>
    </div>
  );
}

export default Doctorcard;