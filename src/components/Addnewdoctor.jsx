
import { useState } from "react";
import { useContext } from "react";
import { DoctorContext } from "./Doctorprovider";
import Home from "./Home";
import axios from "axios";

function Addnewdoctor() {
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [gender, setGender] = useState("");
    let [specialization, setSpecialization] = useState("");
    let [salary, setSalary] = useState("");
    let [newdoctor, setNewdoctor] = useState(null);
    let{setnewdoctor}=useContext(DoctorContext)

    async function handlesubmit(event) {
        event.preventDefault();

        let doctor = {
            id: Date.now(),
            name,
            age,
            gender,
            specialization,
            salary
        };

        await axios.post(
            "https://doctorapibackend.onrender.com/doctors",
            doctor
        );

        setNewdoctor(doctor);
        alert("doctor added");

        console.log(doctor);
    }

    async function deldata(id) {
        await axios.delete(
            `https://doctorapibackend.onrender.com/doctors/${id}`
        );

        alert("doctor deleted");
    }

    async function updatedoctor(id) {
        let data = {
            id,
            name: prompt('enter name')||'prudhvi raj',
            age: prompt('enter age')||23,
            gender: prompt('enter gender')||'male',
            specialization: prompt('enter specialization')||'heart',
            salary: prompt('enter salary')||50000
        };

        await axios.put(
            `https://doctorapibackend.onrender.com/doctors/${id}`,
            data
        );

        setNewdoctor(data);
        alert('doctor updated');
    }

    return (
        <div>
            <h1>Add New Doctor</h1>

            <form onSubmit={handlesubmit} className="formcontainer">
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="Enter Doctor Name"
                    required
                />

                <input
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                    type="number"
                    placeholder="Enter Age"
                    required
                />

                <input
                    onChange={(e) => setSpecialization(e.target.value)}
                    value={specialization}
                    type="text"
                    placeholder="Enter Specialization"
                    required
                />

                <select
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
                    name="gender"
                    id="gender"
                    required
                >
                    <option value="" disabled>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <input
                    onChange={(e) => setSalary(e.target.value)}
                    value={salary}
                    type="number"
                    placeholder="Enter Salary"
                    required
                />

                <button type="submit">Add Doctor</button>
            </form>

            <Home/>
        </div>
    );
}

export default Addnewdoctor;

