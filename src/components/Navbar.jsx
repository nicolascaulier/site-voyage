import React from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div classNme='flex justify-between items-center h-20'>
      <div>
        <h1>BEACHES.</h1>
      </div>
      <ul>
        <li>Home</li>
        <li>Destinations</li>
        <li>Voyage</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div>
        <p>https://www.youtube.com/watch?v=gXdHvoWvViQ  10min22 </p>
        <BsPerson />
      </div>
    </div>
  )
}

export default Navbar
