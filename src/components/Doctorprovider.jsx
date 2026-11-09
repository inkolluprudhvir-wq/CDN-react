import React, { createContext, useState } from 'react'
import axios from 'axios'

export const DoctorContext = createContext()

function Doctorprovider({ children }) {
    let [newdoctor, setNewdoctor] = useState(null)

    async function deldata(id) {
        // Delete doctor logic
    }

    async function updatedoctor(id) {
        // Update doctor logic
    }

    return (
        <DoctorContext.Provider value={{
            newdoctor,
            setNewdoctor,
            deldata,
            updatedoctor
        }}>
            {children}
        </DoctorContext.Provider>
    )
}

export default Doctorprovider