import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
export default function Menu() {
  return (
    <div className='menu'>
            <Link to="/"><button className='logoButton'>Logo</button></Link>
            <Link to="/"><button className='menuButton'>Home</button></Link>
            <Link to="/Prayertimes"><button className='menuButton'>Prayer times</button></Link>
            <Link to="/Timezone"><button className='menuButton'>Timezone</button></Link>
            <Link to="/Calendar"><button className='menuButton'>Calendar</button></Link>
            <Link to="/Map"><button className='menuButton'>Map</button></Link>
     
    </div>
  )
}
