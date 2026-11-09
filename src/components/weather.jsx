import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function Weather() {
    let [weather,setWeather]=useState('')
    let [city,setCity]=useState('')
    async function fetchweather(event){
        event.preventDefault()
        console.log(city)
        let response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=466ddaa21a8de191e9f608bd11a56acb`)
        console.log(response.data)
        setWeather(response.data)
    }
  return (
    <div>
        <h1>Weather app</h1>
        <form action="" onSubmit={fetchweather}>
            <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder='enter cityname'/>
            <button type='submit'>search</button>
        </form>
       
        {weather && (
            <div>{weather.main.temp}</div>
        )}
    </div>
  )
}

export default Weather