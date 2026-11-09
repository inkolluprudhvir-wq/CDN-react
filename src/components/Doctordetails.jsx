
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';

function Doctordetails() {

    let { id } = useParams()
    let [doctor, setDoctor] = useState(null)

    // API calling using Axios
    async function fetchdata() {
        let response = await axios.get(
            "https://doctorapibackend.onrender.com/doctors"
        )

        let finaldata = response.data.find((val) => val.id == id)
        setDoctor(finaldata)
    }

    // Static data (Previous code)
    /*
    function fetchdata() {
        let data = [
            {
                id: 1,
                name: "Teja",
                age: 26,
                gender: "Male",
                specialization: "Muscles",
                salary: 7000000,
            },
            {
                id: 2,
                name: "Sam",
                age: 26,
                gender: "Male",
                specialization: "Bones",
                salary: 4000000,
            },
            {
                id: 3,
                name: "Anu",
                age: 25,
                gender: "Female",
                specialization: "Heart",
                salary: 5000000,
            },
        ];

        let finaldata = data.find((val) => val.id == id)
        setDoctor(finaldata)
    }
    */

    useEffect(() => {
        fetchdata()
    }, [id])

    if (!doctor) {
        return <h2>Loading...</h2>
    }

    return (
        <div className='details'>
            <h1>{doctor.id}</h1>
            <h2>{doctor.name}</h2>
            <h2>{doctor.specialization}</h2>
            <h2>{doctor.age}</h2>
            <h2>{doctor.salary}</h2>
            <h2>{doctor.gender}</h2>
        </div>
    )
}

export default Doctordetails
