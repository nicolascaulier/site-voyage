import React from 'react'
import beachVid from '../assets/beachVid.mp4'
import { AiOutlineSearch } from 'react-icons/ai'
import {Cursor, useTypewriter } from 'react-simple-typewriter'


const Hero = () => {
    const [text, count] = useTypewriter({
        words: [
            "HELLO A TOUS, c est Nico",
            "Bienvenue sur mon site ",
            "test pour voir si c est good ",
            "EZ Typewriter ",
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover' src={beachVid} autoPlay loop muted/>
        <div className='absolute w-full h-full top-0 left-0  bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1> Voyage En Première Classe</h1>
          <div><h2 className='py-4'>{text}</h2></div>  
            <h2 className='py-4'>Top des Locations </h2>
            <h2 className='py-4'>https://www.youtube.com/watch?v=gXdHvoWvViQ a 1:10:56 min</h2>
            <form className='flex justify-between items-center max-v-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
                <div>
                    <input  className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none' type="text" placeholder='Rechercher Destinations'/>
                </div>
                <div>
                    <button><AiOutlineSearch size={20} className='icon' style={{color: '#ffffff'}}/></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero
