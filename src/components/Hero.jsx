import React from 'react'
import beachVid from '../assets/beachVid.mp4'
import { AiOutlineSearch } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover' src={beachVid} autoPlay loop muted/>
        <div className='absolute w-full h-full top-0 left-0  bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1> Voyage En Première Classe</h1>
            <h2>Top des Locations </h2>
           
            <form>
                <div>
                    <input type="text" placeholder='Rechercher Destinations'/>
                </div>
                <div>
                    <button><AiOutlineSearch size={20} className='icon'/></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero
