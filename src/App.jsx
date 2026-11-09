import Addnewdoctor from './components/Addnewdoctor'
import Doctordetails from './components/Doctordetails'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DoctorDetails from './components/Doctordetails';
import Weather from './components/Weather';
import Protectedroute from './components/Protectedroute';
import Doctorprovider from './components/Doctorprovider';
import Navbar from './components/Navbar'
import Section from './components/Section'

function App() {
    let [islogin, setIslogin] = useState(false);

    return (
        <div>
            <button onClick={() => setIslogin(true)}>click to login</button>
            <Navbar />

            <Routes>
                <Route path='/' element={<Section />} />
                <Route
                    path='/adddoctor'
                    element={
                        <Protectedroute islogin={islogin}>
                            <Doctorprovider>
                                <Addnewdoctor />
                            </Doctorprovider>
                        </Protectedroute>
                    }
                />
                <Route path='/doctor/:id' element={<Doctordetails />} />
                <Route path='/weather' element={<Weather />} />
            </Routes>
        </div>
    );
}

export default App;
