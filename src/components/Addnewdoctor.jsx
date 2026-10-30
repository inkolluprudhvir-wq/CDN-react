
import { useState } from "react";
import Home from "./Home";
import Doctorcard from './Doctorcard';

function Addnewdoctor() {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [gender, setGender] = useState("");
  let [specialization, setSpecialization] = useState("");
  let [salary, setSalary] = useState("");
  let [newdoctor, setNewdoctor] = useState(null);

  function handlesubmit(event) {
    event.preventDefault();
    setNewdoctor({ id: Date.now(), name, age, gender, specialization, salary });
    console.log(newdoctor);
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

      <Home newdoctor={newdoctor} />
    </div>
  );
}

export default Addnewdoctor;
