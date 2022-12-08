import React,{useState} from 'react';
import {FaBars, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import {AiFillLinkedin} from 'react-icons/ai';

const Navbar = () => {
const [nav, setNav] = useState(false)
const handleNav = () =>{
    setNav(!nav) 
}
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center pr-8 pl-4 z-10 absolute bg-black/80 text-white'>
         <ul className='hidden sm:flex' >
                    <li><a href="/" className='hover:text-red-500'>Home</a></li>
                    <li><a href="#location" className='hover:text-red-500'>Locations</a></li>
                    <li><a href="#projects" className='hover:text-red-500'>Projects</a></li>
                    <li><a href="#testimonials" className='hover:text-red-500'>Testimonials</a></li>
                    <li><a href="#contact" className='hover:text-red-500'>Contact</a></li>
                </ul>
     
            <div className='flex justify-between'>
             <FaFacebookF className='mx-4 hover:text-red-500 cursor-pointer' />
             <AiFillLinkedin className='mx-4 hover:text-red-500 cursor-pointer' />
             <FaTwitter className='mx-4 hover:text-red-500 cursor-pointer' />
             <FaInstagram className='mx-4 hover:text-red-500 cursor-pointer' />
            </div>

            <div className='sm:hidden z-10' >
            <FaBars onClick={() => handleNav()}  size={30} />
            </div>
            <div className={nav ?'overflow-y-hidden md:hidden ease-in px-4 py-7 flex flex-col w-1/2 duration-300 text-gray-300 absolute left-0 top-0 h-screen bg-black/90': 'absolute top-0 h-screen left-[-100%] ease-in duration-500' }>
            <ul className='text-center pt-8 w-full h-full' >
                    <li><a className='text-xl' href="/">Home</a></li>
                    <li><a  className='text-xl' href="#location">Our Locations</a></li>
                    <li><a className='text-xl' href="#projects">Projects</a></li>
                    <li><a className='text-xl' href="#testimonials">Testimonials</a></li>
                    <li><a className='text-xl' href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
   
  )
}

export default Navbar
