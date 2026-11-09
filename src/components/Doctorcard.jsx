
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DoctorContext } from './Doctorprovider';

function Doctorcard({ name, gender, specialization, id,  }) {

    const navigate = useNavigate();
    const { deldata, updatedoctor } = useContext(DoctorContext);

    return (
        <div className="doctor-card">

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

            <button onClick={() => updatedoctor(id)}>
                Update
            </button>

            <button onClick={() => deldata(id)}>
                Delete
            </button>

        </div>
    );
}

export default Doctorcard;
