import React from 'react'
import {useQuery} from "react-query"
import "./pages.css"
export default function Prayertimes() {
  const fetchCableData= async()=>{
    const response= await fetch("http://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=2 http://api.aladhan.com/v1/calendar/2019?latitude=51.508515&longitude=-0.1254872&method=2")
    return await response.json();
  }
  const {data, status}=useQuery("cableData",fetchCableData)
  

    if(status === "loading"){
      return <div>Loading</div>
    }
    if(status === "error"){ return <div>error</div>
    }

  return (
    <div className='prayerTabs'>

  
    <p>Fajr: {data.data[0].timings.Sunrise}</p>
    <p>Dhur: {data.data[0].timings.Dhuhr}</p>
    <p>Asr: {data.data[0].timings.Asr}</p>
    <p>Sunset: {data.data[0].timings.Sunset}</p>
    <p>Isha: {data.data[0].timings.Isha}</p>

    </div>
  )
}

