
import { useState, useEffect, useContext } from 'react';
import Doctorcard from './Doctorcard';
import axios from 'axios';
import { DoctorContext } from './Doctorprovider';

function Home() {

    let [doctors, setDoctors] = useState([]);
    let [search, setSearch] = useState('');
    let [specialization, setSpecialization] = useState('');
    let{newdoctor}=useContext(DoctorContext)

    async function fetchdata() {
        try {
            let response = await axios.get(
                "https://doctorapibackend.onrender.com/doctors"
            );

            console.log(response.data);
            setDoctors(response.data);

        } catch (error) {
            console.log("Error fetching doctors:", error);
        }
    }

    useEffect(() => {
        fetchdata();
    }, [newdoctor]);

    let filteredDoctors = doctors.filter((doctor) => {

        return (
            doctor.name.toLowerCase().includes(search.toLowerCase()) &&
            (
                specialization === '' ||
                doctor.specialization.toLowerCase() === specialization.toLowerCase()
            )
        );

    });

    return (
        <div>

            <div className="filters">

                <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search your doctor"
                />

                <select
                    name="specialization"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="Muscles">Muscles</option>
                    <option value="Bones">Bones</option>
                    <option value="Heart">Heart</option>
                </select>

            </div>

            {filteredDoctors.length > 0 ? (

                <div className="doctorcontainer">

                    {filteredDoctors.map((doctor) => (

                        <Doctorcard
                            key={doctor.id}
                            id={doctor.id}
                            name={doctor.name}
                            gender={doctor.gender}
                            specialization={doctor.specialization}
                            
                        />

                    ))}

                </div>

            ) : (

                <h1>Doctors not found</h1>

            )}

        </div>
    );
}

export default Home;
